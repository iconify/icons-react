import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cdyu3tbss.css';
import '../../css/f/fdwcfrbsd.css';
import '../../css/k/kvqd6bcxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="cdyu3tbss"/><path class="fdwcfrbsd"/><path class="kvqd6bcxo"/></g>`,
		"fallback": "reicon:status-up",
	});
}

export default Component;
