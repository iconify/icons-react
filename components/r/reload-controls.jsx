import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r2nyvp1ah.css';
import '../../css/f/fzzb6pbof.css';
import '../../css/z/z560sccrd.css';
import '../../css/r/rbla79beo.css';
import '../../css/a/ax43zvhaq.css';
import '../../css/n/ny7zc_vxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r2nyvp1ah"/><circle class="fzzb6pbof"/><circle class="z560sccrd"/><path class="rbla79beo"/><path class="ax43zvhaq"/><path clip-rule="evenodd" class="ny7zc_vxi"/></g>`,
		"fallback": "andrsrxn:reload-controls",
	});
}

export default Component;
