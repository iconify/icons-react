import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j9umplbbp.css';
import '../../css/p/pd3y9sq9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j9umplbbp"/><path class="pd3y9sq9k"/></g>`,
		"fallback": "keyline-icons:picture-in-picture-two-tone",
	});
}

export default Component;
