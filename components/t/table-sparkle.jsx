import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bvoiwcq4f.css';
import '../../css/l/la4p02b-f.css';
import '../../css/l/lwkqk3b_i.css';
import '../../css/b/bqtcasd4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bvoiwcq4f"/><path class="la4p02b-f"/><path class="lwkqk3b_i"/><path class="bqtcasd4d"/></g>`,
		"fallback": "andrsrxn:table-sparkle",
	});
}

export default Component;
