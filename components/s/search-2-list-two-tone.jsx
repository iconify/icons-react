import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zu7ckv_si.css';
import '../../css/j/joly-03se.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zu7ckv_si"/><path class="joly-03se"/></g>`,
		"fallback": "keyline-icons:search-2-list-two-tone",
	});
}

export default Component;
