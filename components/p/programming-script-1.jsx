import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x8pd1bbrw.css';
import '../../css/c/cjnpadbpt.css';
import '../../css/k/kiophgbva.css';
import '../../css/l/lu8z_bc0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x8pd1bbrw"/><path class="cjnpadbpt"/><path class="kiophgbva"/><path class="lu8z_bc0y"/></g>`,
		"fallback": "streamline-cyber-color:programming-script-1",
	});
}

export default Component;
