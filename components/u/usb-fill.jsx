import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i5i8ipbec.css';
import '../../css/g/g61indbgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="i5i8ipbec"/><path class="g61indbgn"/></g>`,
		"fallback": "keyline-icons:usb-fill",
	});
}

export default Component;
