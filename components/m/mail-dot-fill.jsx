import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mgl5hxt6h.css';
import '../../css/y/ydy6yt3gh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mgl5hxt6h"/><path class="ydy6yt3gh"/></g>`,
		"fallback": "keyline-icons:mail-dot-fill",
	});
}

export default Component;
