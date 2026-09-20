import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/na-tm-blr.css';
import '../../css/s/s2e84ymve.css';
import '../../css/q/q-l31ctaw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="na-tm-blr"/><path class="s2e84ymve"/><path clip-rule="evenodd" class="q-l31ctaw"/></g>`,
		"fallback": "streamline-color:pictures-folder-memories-flat",
	});
}

export default Component;
