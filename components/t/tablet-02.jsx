import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/uc502dbcf.css';
import '../../css/s/s87g7yb0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="uc502dbcf"/><path class="s87g7yb0m"/></g>`,
		"fallback": "hugeicons:tablet-02",
	});
}

export default Component;
