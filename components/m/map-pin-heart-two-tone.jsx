import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g7gekvbgt.css';
import '../../css/m/m1ojwtb1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g7gekvbgt"/><path class="m1ojwtb1i"/></g>`,
		"fallback": "keyline-icons:map-pin-heart-two-tone",
	});
}

export default Component;
