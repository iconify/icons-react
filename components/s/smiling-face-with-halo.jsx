import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t01_vl9ex.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/r/rk7o8cb4o.css';
import '../../css/t/tzh14l3ea.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t01_vl9ex"/><path class="jnd9-ne4y"/><path class="rk7o8cb4o"/><path class="tzh14l3ea"/></g>`,
		"fallback": "fluent-emoji-flat:smiling-face-with-halo",
	});
}

export default Component;
