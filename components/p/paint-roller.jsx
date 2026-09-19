import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzsdd8o_z.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzsdd8o_z"/>`,
		"fallback": "fa7-solid:paint-roller",
	});
}

export default Component;
