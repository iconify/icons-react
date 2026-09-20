import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x2-mfwebp.css';
import '../../css/o/oi8n25uov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x2-mfwebp"/><path class="oi8n25uov"/></g>`,
		"fallback": "keyline-icons:truck-fill",
	});
}

export default Component;
