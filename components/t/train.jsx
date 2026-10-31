import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/iw16e-mvb.css';
import '../../css/m/m60dlqbgi.css';
import '../../css/l/lnxlh7bes.css';
import '../../css/u/ulrevmbjg.css';
import '../../css/h/h_i-h28vb.css';
import '../../css/f/f0z89_33j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="iw16e-mvb wm-shadow"/><path class="m60dlqbgi"/><path class="lnxlh7bes"/><path class="ulrevmbjg"/><path class="h_i-h28vb"/><path class="f0z89_33j"/></g>`,
		"fallback": "withicons-retro:train",
	});
}

export default Component;
