import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/njakh_50p.css';
import '../../css/d/dno4_nblm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="njakh_50p"/><path class="dno4_nblm"/></g>`,
		"fallback": "keyline-icons:signal-low-fill",
	});
}

export default Component;
