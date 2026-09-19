import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_s5z_bat.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_s5z_bat"/>`,
		"fallback": "fa7-solid:plug-circle-check",
	});
}

export default Component;
