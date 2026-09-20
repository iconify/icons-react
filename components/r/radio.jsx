import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_xfw2bxa.css';
import '../../css/f/fdzyx523p.css';
import '../../css/z/zyqkv7era.css';
import '../../css/l/lkbn2cb9h.css';
import '../../css/z/z-zi6gblz.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/d/dw756kbdt.css';
import '../../css/w/w_55__grm.css';
import '../../css/n/njrcy8bkz.css';
import '../../css/y/y9pwg22yi.css';
import '../../css/l/lgns5ibrs.css';
import '../../css/a/a9ve5hbss.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_xfw2bxa"/><path class="fdzyx523p"/><path class="zyqkv7era"/><circle class="lkbn2cb9h"/><circle class="z-zi6gblz"/><g class="ij2x_72vy"><path class="dw756kbdt"/><circle class="w_55__grm"/><path class="njrcy8bkz"/><path class="y9pwg22yi"/><circle class="lgns5ibrs"/><path class="a9ve5hbss"/></g>`,
		"fallback": "openmoji:radio",
	});
}

export default Component;
