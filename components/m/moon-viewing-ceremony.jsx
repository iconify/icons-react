import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r43vgcc3p.css';
import '../../css/l/l7cre4byy.css';
import '../../css/t/tzo6mabay.css';
import '../../css/a/afhv9gyrs.css';
import '../../css/e/enn1nac0h.css';
import '../../css/g/glcozacap.css';
import '../../css/v/veblz5b2n.css';
import '../../css/i/izwh8ce0t.css';
import '../../css/c/c95x7-27t.css';
import '../../css/z/z3c2p_xkt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r43vgcc3p"/><path class="l7cre4byy"/><path class="tzo6mabay"/><path class="afhv9gyrs"/><path class="enn1nac0h"/><path class="glcozacap"/><path class="veblz5b2n"/><path class="izwh8ce0t"/><path class="c95x7-27t"/><path class="z3c2p_xkt"/></g>`,
		"fallback": "fluent-emoji-flat:moon-viewing-ceremony",
	});
}

export default Component;
