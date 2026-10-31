import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/k/ke9k0jbyg.css';
import '../../css/s/s2cdqs72t.css';
import '../../css/k/kefe6bcfs.css';
import '../../css/p/prthrmbng.css';
import '../../css/y/ym55n8biq.css';
import '../../css/n/nrrittbwu.css';
import '../../css/w/wo89xnbgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="ke9k0jbyg"/><path class="s2cdqs72t wm-s"/><path class="kefe6bcfs wm-shine"/><path class="prthrmbng wm-k"/><path class="wm-a ym55n8biq"/><path class="nrrittbwu wm-s"/><path class="wm-deco wo89xnbgv"/></g>`,
		"fallback": "withicons-kawaii:mistletoe",
	});
}

export default Component;
