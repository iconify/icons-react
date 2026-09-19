import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zyhjwmhpq.css';
import '../../css/i/i7c4h2zdq.css';
import '../../css/s/sqekfgb1j.css';
import '../../css/f/fxm5l37-i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(0 2)" class="n1lsf0bnc"><path class="zyhjwmhpq"/><path class="i7c4h2zdq"/><ellipse class="sqekfgb1j"/><circle class="fxm5l37-i"/></g>`,
		"fallback": "si-glyph:trolley-full",
	});
}

export default Component;
