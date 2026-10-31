import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/l/ljv5wj_nl.css';
import '../../css/m/mob2hr_-u.css';
import '../../css/p/psyzc1_dw.css';
import '../../css/i/igb16csex.css';
import '../../css/p/p7lia970e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="ljv5wj_nl"/><path class="mob2hr_-u wm-shine"/><path class="psyzc1_dw wm-k"/><path class="igb16csex wm-a"/><path class="p7lia970e wm-deco"/></g>`,
		"fallback": "withicons-kawaii:wand",
	});
}

export default Component;
