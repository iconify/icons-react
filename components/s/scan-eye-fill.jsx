import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f9pk1qbzf.css';
import '../../css/a/al_pt5bel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="f9pk1qbzf"/><path class="al_pt5bel"/></g>`,
		"fallback": "keyline-icons:scan-eye-fill",
	});
}

export default Component;
