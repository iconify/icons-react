import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/d/dfus7ib-f.css';
import '../../css/e/e_1sobcka.css';
import '../../css/g/g4ocnifpo.css';
import '../../css/z/zhc7zybhy.css';
import '../../css/b/bygyzl-0y.css';
import '../../css/n/nb8g5lbdg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGCfppdtrP" x1="9.93" x2="13.93" y1="2.52" y2="21.62" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="dfus7ib-f wm-k"/><path class="e_1sobcka wm-deco"/><path fill="url(#SVGCfppdtrP)" class="g4ocnifpo wm-k"/><path class="wm-shadow zhc7zybhy"/><path class="bygyzl-0y wm-shine"/><path class="nb8g5lbdg wm-shine"/></g>`,
		"fallback": "withicons-valentine:pencil",
	});
}

export default Component;
