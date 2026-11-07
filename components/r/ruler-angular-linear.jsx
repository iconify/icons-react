import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sb0q3diim.css';
import '../../css/s/s9qxbdczi.css';
import '../../css/r/r22-xebfg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="sb0q3diim"/><path class="s9qxbdczi"/><path class="r22-xebfg"/></g>`,
		"fallback": "solar:ruler-angular-linear",
	});
}

export default Component;
