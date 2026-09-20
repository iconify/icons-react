import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y89mjdb7n.css';
import '../../css/b/b6e53ac_z.css';
import '../../css/k/kg01y9bkk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y89mjdb7n"/><path clip-rule="evenodd" class="b6e53ac_z"/><path clip-rule="evenodd" class="kg01y9bkk"/></g>`,
		"fallback": "streamline-color:laptop-charging-flat",
	});
}

export default Component;
