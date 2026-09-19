import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ufvx88xsq.css';
import '../../css/e/ed-d8sxlq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ufvx88xsq"/><path class="ed-d8sxlq"/></g>`,
		"fallback": "fluent-emoji-flat:sun",
	});
}

export default Component;
