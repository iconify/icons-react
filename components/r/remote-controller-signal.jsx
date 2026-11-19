import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7qobfmek.css';
import '../../css/y/yi8a-q-bg.css';
import '../../css/s/sqf9_npno.css';
import '../../css/j/j3g2tvtjr.css';
import '../../css/j/jmpt_lv4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="m7qobfmek"/><path class="yi8a-q-bg"/><path class="sqf9_npno"/><path class="j3g2tvtjr"/><path class="jmpt_lv4z"/></g>`,
		"fallback": "andrsrxn:remote-controller-signal",
	});
}

export default Component;
