import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gt4erfbgl.css';
import '../../css/k/kr5538bfj.css';
import '../../css/i/inp7-fbxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gt4erfbgl"/><path class="kr5538bfj"/><path class="inp7-fbxr"/>`,
		"fallback": "solar:round-sort-vertical-bold-duotone",
	});
}

export default Component;
