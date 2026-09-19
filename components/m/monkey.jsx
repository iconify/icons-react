import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vw5-x0b1v.css';
import '../../css/q/qqx-51uey.css';
import '../../css/w/w_3ysqbff.css';
import '../../css/u/u93xe4_7h.css';
import '../../css/b/bsswh6b9g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vw5-x0b1v"/><path class="qqx-51uey"/><path class="w_3ysqbff"/><path class="u93xe4_7h"/><path class="bsswh6b9g"/></g>`,
		"fallback": "fluent-emoji-flat:monkey",
	});
}

export default Component;
