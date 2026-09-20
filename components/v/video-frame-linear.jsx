import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pw8f5c0fp.css';
import '../../css/r/r_0pl6b2k.css';
import '../../css/t/txon6o65c.css';
import '../../css/w/wc-mzxdmm.css';
import '../../css/b/b9ylrbfca.css';
import '../../css/y/yirxaabex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pw8f5c0fp"/><path class="r_0pl6b2k"/><path class="txon6o65c"/><path class="wc-mzxdmm"/><path class="b9ylrbfca"/><path class="yirxaabex"/></g>`,
		"fallback": "solar:video-frame-linear",
	});
}

export default Component;
