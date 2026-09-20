import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e3m98dbwi.css';
import '../../css/h/h0b_iccbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="e3m98dbwi"/><path class="h0b_iccbz"/></g>`,
		"fallback": "keyline-icons:settings-two-tone",
	});
}

export default Component;
