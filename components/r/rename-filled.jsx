import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxf4odbtj.css';
import '../../css/k/k17ecxb8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxf4odbtj"/><path class="k17ecxb8e"/>`,
		"fallback": "boxicons:rename-filled",
	});
}

export default Component;
