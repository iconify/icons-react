import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gvx0yq0cd.css';
import '../../css/o/o-wl15bae.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gvx0yq0cd"/><path class="o-wl15bae"/></g>`,
		"fallback": "fluent-emoji-flat:pinching-hand-medium",
	});
}

export default Component;
