import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/g/gk0wtmblg.css';
import '../../css/p/p1qu8cb4h.css';
import '../../css/o/o7a7kkzzl.css';
import '../../css/d/dz2mh5f6h.css';
import '../../css/p/p4o2k6g2r.css';
import '../../css/w/wdphd8b3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="gk0wtmblg wm-shadow"/><path class="p1qu8cb4h"/><path class="o7a7kkzzl"/><path class="dz2mh5f6h"/><path class="p4o2k6g2r wm-shine"/><path class="wdphd8b3t wm-deco"/></g>`,
		"fallback": "withicons-sticker:test-tube",
	});
}

export default Component;
