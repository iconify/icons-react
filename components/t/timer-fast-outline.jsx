import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n055wwb3j.css';
import '../../css/e/er7943k5n.css';
import '../../css/v/v9uzzfb6v.css';
import '../../css/o/on7cycbvn.css';
import '../../css/l/lapepmbgk.css';
import '../../css/x/x0u1_6k8h.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="n055wwb3j"/><path clip-rule="evenodd" class="er7943k5n"/><path class="v9uzzfb6v"/><path clip-rule="evenodd" class="on7cycbvn"/><path clip-rule="evenodd" class="lapepmbgk"/><path class="x0u1_6k8h"/></g>`,
		"fallback": "glyphs:timer-fast-outline",
	});
}

export default Component;
