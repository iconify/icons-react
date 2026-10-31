import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hlhg6ac2r.css';
import '../../css/z/zzudomejr.css';
import '../../css/o/owyws4bla.css';
import '../../css/r/rruficcbx.css';
import '../../css/i/ifnqhqbgb.css';
import '../../css/r/rn3llub_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="hlhg6ac2r wm-shadow"/><path class="zzudomejr"/><path class="owyws4bla"/><path class="rruficcbx"/><path class="ifnqhqbgb"/><path class="rn3llub_k"/></g>`,
		"fallback": "withicons-retro:smartphone",
	});
}

export default Component;
