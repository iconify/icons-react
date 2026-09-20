import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lxh981b4t.css';
import '../../css/z/z-4v-qbfk.css';
import '../../css/x/xw36_bcae.css';
import '../../css/n/nmp0h903g.css';
import '../../css/i/i18yg5b2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lxh981b4t"/><path class="z-4v-qbfk"/><path class="xw36_bcae"/><path class="nmp0h903g"/><path class="i18yg5b2h"/></g>`,
		"fallback": "streamline-cyber-color:package-wooden",
	});
}

export default Component;
