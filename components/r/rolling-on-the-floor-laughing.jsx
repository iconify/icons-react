import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b-xr82ymh.css';
import '../../css/g/gx-l4-v2i.css';
import '../../css/h/hinf-5bxh.css';
import '../../css/e/e-e4_ub7k.css';
import '../../css/r/rp8jalbyp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b-xr82ymh"/><path class="gx-l4-v2i"/><path class="hinf-5bxh"/><path class="e-e4_ub7k"/><path class="rp8jalbyp"/></g>`,
		"fallback": "fluent-emoji-flat:rolling-on-the-floor-laughing",
	});
}

export default Component;
