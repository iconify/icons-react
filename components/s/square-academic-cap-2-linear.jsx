import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hw8sv4bga.css';
import '../../css/b/bubvahb-l.css';
import '../../css/c/csckydbbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hw8sv4bga"/><path class="bubvahb-l"/><path class="csckydbbl"/></g>`,
		"fallback": "solar:square-academic-cap-2-linear",
	});
}

export default Component;
