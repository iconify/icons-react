import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u8y_286sp.css';
import '../../css/b/ba0j365wv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u8y_286sp"/><path class="ba0j365wv"/></g>`,
		"fallback": "keyline-icons:message-square-dot-duotone",
	});
}

export default Component;
