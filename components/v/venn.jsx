import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mx0j3m0za.css';
import '../../css/s/sevn03bfn.css';
import '../../css/m/m6j3t8g_p.css';
import '../../css/b/bmnt2jk-i.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="mx0j3m0za"><path class="sevn03bfn"/><path class="m6j3t8g_p"/><path class="bmnt2jk-i"/></g>`,
		"fallback": "glyphs:venn",
	});
}

export default Component;
