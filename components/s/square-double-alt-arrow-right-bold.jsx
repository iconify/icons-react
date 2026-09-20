import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zuywxjb6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zuywxjb6b"/>`,
		"fallback": "solar:square-double-alt-arrow-right-bold",
	});
}

export default Component;
