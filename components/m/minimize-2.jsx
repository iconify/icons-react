import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pnjr8_b7e.css';
import '../../css/s/stui2mbih.css';
import '../../css/v/vkghwac4g.css';
import '../../css/a/a937s988w.css';
import '../../css/k/kmx_20byp.css';
import '../../css/t/t5j436b5k.css';
import '../../css/h/han27ibqa.css';
import '../../css/r/r8lir1b_e.css';
import '../../css/m/mf70ufnib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGYGuemeoD" x1="3.1" x2="20.9" y1="3.1" y2="20.9" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient><linearGradient id="SVGzn0AKlxN" x1="2.4" x2="21.6" y1="2.4" y2="21.6" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient></defs><path class="kmx_20byp wm-a"/><path fill="url(#SVGYGuemeoD)" class="t5j436b5k wm-a"/><path class="han27ibqa wm-k"/><path class="r8lir1b_e wm-k"/><path fill="url(#SVGzn0AKlxN)" class="mf70ufnib wm-k"/></g>`,
		"fallback": "withicons-suite:minimize-2",
	});
}

export default Component;
