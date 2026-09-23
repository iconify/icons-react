import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mkuuv1z6l.css';
import '../../css/r/rxgtgxb6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mkuuv1z6l"/><path class="rxgtgxb6k"/></g>`,
		"fallback": "keyline-icons:phone-sparkles",
	});
}

export default Component;
