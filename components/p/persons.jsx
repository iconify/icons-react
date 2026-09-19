import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bfdztm4yf.css';
import '../../css/f/f5j14_hcn.css';
import '../../css/l/lo_jtt6tv.css';
import '../../css/z/zu93z5r4w.css';
import '../../css/l/lw57arbmp.css';
import '../../css/a/aym7j7bua.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="bfdztm4yf"/><path class="f5j14_hcn"/><path class="lo_jtt6tv"/><path class="zu93z5r4w"/><path class="lw57arbmp"/><path class="aym7j7bua"/></g>`,
		"fallback": "pepicons:persons",
	});
}

export default Component;
