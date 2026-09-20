import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/md58pobxu.css';
import '../../css/z/zna1w6bmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="md58pobxu"/><path class="zna1w6bmi"/></g>`,
		"fallback": "keyline-icons:usb-drive",
	});
}

export default Component;
