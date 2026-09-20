import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vqyhl7f-e.css';
import '../../css/q/qzod2tomk.css';
import '../../css/o/oe7cyp87d.css';
import '../../css/t/t0t48xb6n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vqyhl7f-e"/><path class="qzod2tomk"/><path clip-rule="evenodd" class="oe7cyp87d"/><path class="t0t48xb6n"/></g>`,
		"fallback": "streamline-color:nintendo-switch-flat",
	});
}

export default Component;
