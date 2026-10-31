import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lxc6phcbm.css';
import '../../css/o/o4pm3u69d.css';
import '../../css/p/po_8njggz.css';
import '../../css/w/wubj_kbpw.css';
import '../../css/d/d04ezk9jt.css';
import '../../css/o/od7lr0b9p.css';
import '../../css/p/p5f8ipeea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lxc6phcbm wm-k"/><path class="o4pm3u69d wm-k"/><path class="po_8njggz wm-k"/><path class="wm-shadow wubj_kbpw"/><path class="d04ezk9jt wm-shine"/><path class="od7lr0b9p wm-shine"/><path class="p5f8ipeea wm-shine"/></g>`,
		"fallback": "withicons-valentine:notepad-text",
	});
}

export default Component;
