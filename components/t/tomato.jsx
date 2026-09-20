import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfrchkbrg.css';
import '../../css/t/tlsclv64c.css';
import '../../css/p/p_tmywbwe.css';
import '../../css/e/e-_g3_llx.css';
import '../../css/l/lb80qlbob.css';
import '../../css/n/nvr1rrali.css';
import '../../css/p/pu864wbja.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rfrchkbrg"><ellipse class="tlsclv64c"/><path class="p_tmywbwe"/><path class="e-_g3_llx"/></g><g class="lb80qlbob"><path class="nvr1rrali"/><path class="pu864wbja"/></g>`,
		"fallback": "openmoji:tomato",
	});
}

export default Component;
