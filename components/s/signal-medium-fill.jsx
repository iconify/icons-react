import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vswmk0boe.css';
import '../../css/d/dno4_nblm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vswmk0boe"/><path class="dno4_nblm"/></g>`,
		"fallback": "keyline-icons:signal-medium-fill",
	});
}

export default Component;
