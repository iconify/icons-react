import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zykygspcz.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/e/e-bowfbeh.css';
import '../../css/q/q0zdt2bln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zykygspcz"/><g class="mc2zb0bvp"><path class="e-bowfbeh"/><circle class="q0zdt2bln"/></g></g>`,
		"fallback": "struq:practice",
	});
}

export default Component;
