import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/skyb51bdr.css';
import '../../css/y/yf2sdkboz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="skyb51bdr"/><path class="yf2sdkboz"/></g>`,
		"fallback": "streamline-flex-color:navigation-arrow-north",
	});
}

export default Component;
