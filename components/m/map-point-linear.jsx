import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/oacms1bzt.css';
import '../../css/z/zv6cqnbnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="oacms1bzt"/><circle class="zv6cqnbnp"/></g>`,
		"fallback": "solar:map-point-linear",
	});
}

export default Component;
