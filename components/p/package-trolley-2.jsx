import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ni702pb9s.css';
import '../../css/c/cnp-eqjkg.css';
import '../../css/v/vb38m-qjr.css';
import '../../css/n/nmf3gzvsz.css';
import '../../css/n/nka7alkit.css';
import '../../css/z/zci6kfbov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ni702pb9s"/><path class="cnp-eqjkg"/><path class="vb38m-qjr"/><path class="nmf3gzvsz"/><path class="nka7alkit"/><path class="zci6kfbov"/></g>`,
		"fallback": "streamline-cyber-color:package-trolley-2",
	});
}

export default Component;
