import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/m/mcaeuvwhv.css';
import '../../css/r/ref_leb8a.css';
import '../../css/p/pk9qqzb7v.css';
import '../../css/a/aoodbzb2h.css';
import '../../css/t/tf37dhcce.css';
import '../../css/a/a-c1xpkjm.css';
import '../../css/i/izwgjwgsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="mcaeuvwhv wm-shadow"/><path class="ref_leb8a"/><path class="pk9qqzb7v"/><path class="aoodbzb2h"/><path class="tf37dhcce"/><path class="a-c1xpkjm wm-shine"/><path class="izwgjwgsi wm-deco"/></g>`,
		"fallback": "withicons-sticker:video-camera",
	});
}

export default Component;
