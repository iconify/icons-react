import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dgvrpcb-p.css';
import '../../css/u/u8fj7rips.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="dgvrpcb-p"/><path class="u8fj7rips"/></g>`,
		"fallback": "keyline-icons:timer-fill",
	});
}

export default Component;
