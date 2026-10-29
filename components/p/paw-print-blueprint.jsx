import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/k/k4cqaebrx.css';
import '../../css/v/vwqm_i64z.css';
import '../../css/o/oiyz48rit.css';
import '../../css/f/fxd4n6byo.css';
import '../../css/h/hf926_b9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="k4cqaebrx wm-deco"/><path class="vwqm_i64z wm-deco"/><path class="oiyz48rit wm-deco"/><path class="fxd4n6byo wm-k"/><path class="hf926_b9c wm-a"/></g>`,
		"fallback": "withicons:paw-print-blueprint",
	});
}

export default Component;
