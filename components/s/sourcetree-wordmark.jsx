import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eye2jmcul.css';
import '../../css/u/uvvdcns2p.css';
import '../../css/y/ypamjenez.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="eye2jmcul"><path class="uvvdcns2p"/><path class="ypamjenez"/></g>`,
		"fallback": "devicon:sourcetree-wordmark",
	});
}

export default Component;
