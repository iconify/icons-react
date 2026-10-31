import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/g/ggfpxfbjq.css';
import '../../css/z/z9hbohb-l.css';
import '../../css/l/l8h6qcbaz.css';
import '../../css/j/j7wmfrb_j.css';
import '../../css/f/fkt5p9b6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ggfpxfbjq wm-shadow"/><path class="wm-shadow z9hbohb-l"/><path class="l8h6qcbaz"/><path class="j7wmfrb_j"/><path class="fkt5p9b6g"/></g>`,
		"fallback": "withicons-brutal:snow-globe",
	});
}

export default Component;
