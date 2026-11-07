import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/g9v60on3f.css';
import '../../css/e/e1_dsdb2x.css';
import '../../css/f/fdsu-dbih.css';
import '../../css/e/e8n1d8bgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="g9v60on3f"/><path class="e1_dsdb2x"/><path class="fdsu-dbih"/><path class="e8n1d8bgz"/></g>`,
		"fallback": "solar:watch-square-linear",
	});
}

export default Component;
