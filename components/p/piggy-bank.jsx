import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hz874w1dw.css';
import '../../css/i/ig0wdx19m.css';
import '../../css/w/w3dw92y9d.css';
import '../../css/p/pxm9z0bks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hz874w1dw"/><path class="ig0wdx19m"/><path class="w3dw92y9d"/><path class="pxm9z0bks"/></g>`,
		"fallback": "streamline-cyber-color:piggy-bank",
	});
}

export default Component;
