import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/siwcx2s2t.css';
import '../../css/u/u0bo7s5iv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="siwcx2s2t"/><path class="u0bo7s5iv"/></g>`,
		"fallback": "keyline-icons:picture-in-picture-fill",
	});
}

export default Component;
