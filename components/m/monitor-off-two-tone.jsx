import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f0f3iibjg.css';
import '../../css/t/twivc3g-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="f0f3iibjg"/><path class="twivc3g-w"/></g>`,
		"fallback": "keyline-icons:monitor-off-two-tone",
	});
}

export default Component;
