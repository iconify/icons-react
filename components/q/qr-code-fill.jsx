import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/ttakrlbtz.css';
import '../../css/m/mf0zkj60a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ttakrlbtz"/><path class="mf0zkj60a"/></g>`,
		"fallback": "keyline-icons:qr-code-fill",
	});
}

export default Component;
