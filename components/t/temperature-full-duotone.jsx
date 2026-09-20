import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rqh4y-aib.css';
import '../../css/y/y_0xysjez.css';
import '../../css/k/k8te4qbon.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rqh4y-aib"/><path class="y_0xysjez"/><path class="k8te4qbon"/></g>`,
		"fallback": "keyline-icons:temperature-full-duotone",
	});
}

export default Component;
