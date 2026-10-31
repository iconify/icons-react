import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/ggqkbkl6h.css';
import '../../css/h/hts0o1y8r.css';
import '../../css/q/qq3w6ubvs.css';
import '../../css/g/gy7h6zb6b.css';
import '../../css/m/mpezmbcwx.css';
import '../../css/v/v-z76oatv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ggqkbkl6h wm-shadow"/><path class="hts0o1y8r wm-k"/><path class="qq3w6ubvs wm-k"/><path class="gy7h6zb6b wm-k"/><path class="mpezmbcwx wm-k"/><path class="v-z76oatv wm-shine"/></g>`,
		"fallback": "withicons-coquette:loader-circle",
	});
}

export default Component;
