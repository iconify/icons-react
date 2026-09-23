import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/e6okltb-a.css';
import '../../css/z/zb0nc2epf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="e6okltb-a"/><path class="zb0nc2epf"/></g>`,
		"fallback": "keyline-icons:mic-sparkles-sharp-fill",
	});
}

export default Component;
