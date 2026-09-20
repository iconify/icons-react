import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s-_3y1_8e.css';
import '../../css/c/ctyvqfy2k.css';
import '../../css/d/d-a_qsb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s-_3y1_8e"/><path class="ctyvqfy2k"/><path class="d-a_qsb5c"/></g>`,
		"fallback": "keyline-icons:scan-eye-two-tone",
	});
}

export default Component;
