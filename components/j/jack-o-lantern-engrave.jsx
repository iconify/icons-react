import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/exhk0dbbn.css';
import '../../css/e/ewk5zobas.css';
import '../../css/s/stbsxuifv.css';
import '../../css/b/blxolpbxk.css';
import '../../css/j/jv3lt9s1r.css';
import '../../css/r/rdjxs30_z.css';
import '../../css/p/pwsazko7z.css';
import '../../css/y/yn_loccov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="exhk0dbbn wm-k"/><path class="ewk5zobas wm-a"/><path class="stbsxuifv wm-s"/><path class="blxolpbxk wm-shadow"/><path class="jv3lt9s1r wm-k"/><path class="rdjxs30_z wm-a"/><path class="pwsazko7z wm-s"/><path class="wm-a yn_loccov"/></g>`,
		"fallback": "withicons:jack-o-lantern-engrave",
	});
}

export default Component;
