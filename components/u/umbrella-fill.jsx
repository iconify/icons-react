import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wlttq6b8t.css';
import '../../css/f/f_p17abjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wlttq6b8t"/><path class="f_p17abjr"/></g>`,
		"fallback": "keyline-icons:umbrella-fill",
	});
}

export default Component;
