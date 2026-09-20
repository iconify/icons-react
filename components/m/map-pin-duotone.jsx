import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ihfmldtqc.css';
import '../../css/j/jbky7xpdt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ihfmldtqc"/><path class="jbky7xpdt"/></g>`,
		"fallback": "keyline-icons:map-pin-duotone",
	});
}

export default Component;
