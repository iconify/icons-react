import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/q77o3mbpt.css';
import '../../css/b/b05_rogij.css';
import '../../css/t/t-oxy0bih.css';
import '../../css/y/yqmp105yd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="q77o3mbpt"/><path class="b05_rogij"/><path class="t-oxy0bih"/><path class="yqmp105yd"/></g>`,
		"fallback": "solar:tuning-line-duotone",
	});
}

export default Component;
