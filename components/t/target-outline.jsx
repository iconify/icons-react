import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/m8p1o2bmb.css';
import '../../css/a/a8--g49rb.css';
import '../../css/i/ikafgwboi.css';
import '../../css/q/qui1l8ncr.css';
import '../../css/n/nf77i5b4b.css';
import '../../css/c/cgn1z_bih.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="m8p1o2bmb"/><path class="a8--g49rb"/><path class="ikafgwboi"/><path class="qui1l8ncr"/><path class="nf77i5b4b"/><path class="cgn1z_bih"/></g>`,
		"fallback": "glyphs:target-outline",
	});
}

export default Component;
