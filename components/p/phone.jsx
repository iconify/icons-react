import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/v/vuedky_oe.css';
import '../../css/j/jz5yjsbib.css';
import '../../css/t/ta2sw_bss.css';
import '../../css/l/lfatpwbph.css';
import '../../css/m/mmdazb-8i.css';
import '../../css/q/q_b807bxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="vuedky_oe"/><path class="jz5yjsbib"/><path class="ta2sw_bss"/><path class="lfatpwbph"/><path class="mmdazb-8i"/><path class="q_b807bxx"/></g>`,
		"fallback": "matita:phone",
	});
}

export default Component;
