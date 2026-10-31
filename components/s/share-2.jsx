import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/v/vb0__2bbm.css';
import '../../css/q/qlyu1pwmp.css';
import '../../css/p/pg9_vdbco.css';
import '../../css/h/hbf5g_b1s.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="vb0__2bbm"/><path class="qlyu1pwmp wm-shine"/><path class="pg9_vdbco wm-k"/><path class="hbf5g_b1s wm-a"/><path class="rh9qoibkn wm-deco"/></g>`,
		"fallback": "withicons-kawaii:share-2",
	});
}

export default Component;
