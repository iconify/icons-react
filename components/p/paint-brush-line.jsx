import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cl43i_bvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cl43i_bvl"/>`,
		"fallback": "mingcute:paint-brush-line",
	});
}

export default Component;
