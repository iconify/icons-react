import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/l_wre5bdx.css';
import '../../css/u/u098h3bcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="l_wre5bdx"/><path class="u098h3bcd"/></g>`,
		"fallback": "keyline-icons:scan-text-sparkles-sharp-fill",
	});
}

export default Component;
