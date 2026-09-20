import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wg0fk4bty.css';
import '../../css/k/k2-apbbkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wg0fk4bty"/><path class="k2-apbbkm"/></g>`,
		"fallback": "keyline-icons:plane-landing-fill",
	});
}

export default Component;
