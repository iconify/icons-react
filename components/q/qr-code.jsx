import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/ra04bqbjc.css';
import '../../css/w/wghcmjn7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ra04bqbjc"/><path class="wghcmjn7g"/></g>`,
		"fallback": "keyline-icons:qr-code",
	});
}

export default Component;
