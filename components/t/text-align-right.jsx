import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5t9p-b7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5t9p-b7j"/>`,
		"fallback": "akar-icons:text-align-right",
	});
}

export default Component;
