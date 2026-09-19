import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6odt7b8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i6odt7b8k"/>`,
		"fallback": "boxicons:pen-alt",
	});
}

export default Component;
