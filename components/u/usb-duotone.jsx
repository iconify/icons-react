import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hqpdhibjf.css';
import '../../css/g/g61indbgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hqpdhibjf"/><path class="g61indbgn"/></g>`,
		"fallback": "keyline-icons:usb-duotone",
	});
}

export default Component;
