import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bojs4sbkp.css';
import '../../css/w/wsl0rnb5y.css';
import '../../css/p/pv76vcewr.css';
import '../../css/u/uu0pi1bcb.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bojs4sbkp"/><path clip-rule="evenodd" class="wsl0rnb5y"/><path class="pv76vcewr"/><path clip-rule="evenodd" class="uu0pi1bcb"/></g>`,
		"fallback": "flagpack:kn",
	});
}

export default Component;
