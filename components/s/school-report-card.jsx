import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cxcuptfeb.css';
import '../../css/d/dnt1nabhr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="cxcuptfeb"/><path class="dnt1nabhr"/></g>`,
		"fallback": "hugeicons:school-report-card",
	});
}

export default Component;
