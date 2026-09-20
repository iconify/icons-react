import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g6ybgx9-u.css';
import '../../css/t/tqi9df0br.css';
import '../../css/v/vve2dil0o.css';
import '../../css/g/gf77tvf2s.css';
import '../../css/a/a666lh9aj.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="g6ybgx9-u"/><path clip-rule="evenodd" class="tqi9df0br"/><path clip-rule="evenodd" class="vve2dil0o"/><path class="gf77tvf2s"/><path clip-rule="evenodd" class="a666lh9aj"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:monitor-eye-off",
	});
}

export default Component;
