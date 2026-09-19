import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qlu0ufjal.css';
import '../../css/s/sb7awif1l.css';
import '../../css/u/uebd-hbog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qlu0ufjal"/><path class="sb7awif1l"/><path class="uebd-hbog"/></g>`,
		"fallback": "hugeicons:security-validation",
	});
}

export default Component;
