import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x0ojbob9k.css';
import '../../css/f/f5g4hi_ai.css';
import '../../css/m/m5vgfdp6g.css';
import '../../css/t/tlrcbouog.css';
import '../../css/o/o_kwn9jdy.css';
import '../../css/m/mo-73hi-v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x0ojbob9k"/><path class="f5g4hi_ai"/><path class="m5vgfdp6g"/><path class="tlrcbouog"/><path class="o_kwn9jdy"/><path class="mo-73hi-v"/></g>`,
		"fallback": "pepicons:text-bubbles",
	});
}

export default Component;
