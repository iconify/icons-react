import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/w/wa3538bft.css';
import '../../css/i/ixphk9_lq.css';
import '../../css/m/mszqdkbsl.css';
import '../../css/c/cojk3quut.css';
import '../../css/w/wb3c7x6fa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="wa3538bft"/><path class="ixphk9_lq wm-shine"/><path class="mszqdkbsl wm-k"/><path class="cojk3quut wm-a"/><path class="wb3c7x6fa wm-deco"/></g>`,
		"fallback": "withicons-kawaii:red-lantern",
	});
}

export default Component;
