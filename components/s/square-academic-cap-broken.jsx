import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lou2zl3dr.css';
import '../../css/p/p3_4el9va.css';
import '../../css/m/mc35szfhd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lou2zl3dr"/><path class="p3_4el9va"/><path class="mc35szfhd"/></g>`,
		"fallback": "solar:square-academic-cap-broken",
	});
}

export default Component;
