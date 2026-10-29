import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f_ch6tbxa.css';
import '../../css/z/z_6kw01ec.css';
import '../../css/k/kf2bv0b9c.css';
import '../../css/y/yjau6mo1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="f_ch6tbxa wm-k"/><path class="wm-a z_6kw01ec"/><path class="kf2bv0b9c wm-k"/><path class="wm-a yjau6mo1a"/></g>`,
		"fallback": "withicons:landmark-sketch",
	});
}

export default Component;
