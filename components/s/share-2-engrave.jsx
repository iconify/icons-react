import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mf5_b6bbk.css';
import '../../css/j/jf7b-_bty.css';
import '../../css/h/hq38vhbzy.css';
import '../../css/p/pg9_vdbco.css';
import '../../css/m/mit9yg-2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="mf5_b6bbk wm-k"/><path class="jf7b-_bty wm-a"/><path class="hq38vhbzy wm-shadow"/><path class="pg9_vdbco wm-k"/><path class="mit9yg-2j wm-a"/></g>`,
		"fallback": "withicons:share-2-engrave",
	});
}

export default Component;
