import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vu5gm21iq.css';
import '../../css/z/zpgfllj7j.css';
import '../../css/c/ca-kc0lhr.css';
import '../../css/n/ncllzy-2b.css';
import '../../css/o/o1d41pbvf.css';
import '../../css/i/igb3ajb3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="vu5gm21iq wm-k"/><path class="wm-a zpgfllj7j"/><path class="ca-kc0lhr wm-shadow"/><path class="ncllzy-2b wm-k"/><path class="o1d41pbvf wm-a"/><path class="igb3ajb3y wm-k"/></g>`,
		"fallback": "withicons:syringe-engrave",
	});
}

export default Component;
