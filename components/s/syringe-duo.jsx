import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/r3x4w_hdr.css';
import '../../css/v/vnevullnp.css';
import '../../css/a/ab3ysvbhr.css';
import '../../css/m/mhmuqibqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="r3x4w_hdr"/><path class="vnevullnp wm-a"/><path class="ab3ysvbhr"/><path class="mhmuqibqp wm-a"/></g>`,
		"fallback": "withicons:syringe-duo",
	});
}

export default Component;
