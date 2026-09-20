import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t5amry4cl.css';
import '../../css/c/c0zi5697p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t5amry4cl"/><path class="c0zi5697p"/></g>`,
		"fallback": "keyline-icons:map-pin-search-two-tone",
	});
}

export default Component;
