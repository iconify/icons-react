import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hs-hx_bat.css';
import '../../css/u/umnetetzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hs-hx_bat"/><path class="umnetetzo"/></g>`,
		"fallback": "keyline-icons:podium-two-tone",
	});
}

export default Component;
