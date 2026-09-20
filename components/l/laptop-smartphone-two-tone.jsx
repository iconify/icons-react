import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/ls35lps-u.css';
import '../../css/f/fo5gzql_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ls35lps-u"/><path class="fo5gzql_k"/></g>`,
		"fallback": "keyline-icons:laptop-smartphone-two-tone",
	});
}

export default Component;
