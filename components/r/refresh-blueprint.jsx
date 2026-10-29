import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/zoz0n8k_i.css';
import '../../css/t/t218te2ox.css';
import '../../css/j/jewyrvbcx.css';
import '../../css/o/ozpciox1z.css';
import '../../css/r/ri3209paw.css';
import '../../css/p/pln6qt_gc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco zoz0n8k_i"/><path class="t218te2ox wm-deco"/><path class="jewyrvbcx wm-k"/><path class="ozpciox1z wm-a"/><path class="ri3209paw wm-k"/><path class="pln6qt_gc wm-a"/></g>`,
		"fallback": "withicons:refresh-blueprint",
	});
}

export default Component;
