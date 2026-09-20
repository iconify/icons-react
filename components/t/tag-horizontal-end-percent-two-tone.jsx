import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v9yr0pcho.css';
import '../../css/x/x7n3vqbmr.css';
import '../../css/d/d9f73pbit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="v9yr0pcho"/><path class="x7n3vqbmr"/><path class="d9f73pbit"/></g>`,
		"fallback": "keyline-icons:tag-horizontal-end-percent-two-tone",
	});
}

export default Component;
