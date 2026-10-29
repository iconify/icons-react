import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/l71k8fb0y.css';
import '../../css/e/eeuoneb2d.css';
import '../../css/i/i1fwsxj1m.css';
import '../../css/n/n54gpdb3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="l71k8fb0y wm-k"/><path class="eeuoneb2d wm-a"/><path class="i1fwsxj1m wm-k"/><path class="n54gpdb3n wm-a"/></g>`,
		"fallback": "withicons:italic-sketch",
	});
}

export default Component;
