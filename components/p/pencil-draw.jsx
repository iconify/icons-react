import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cl37b7c_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cl37b7c_m"/>`,
		"fallback": "boxicons:pencil-draw",
	});
}

export default Component;
