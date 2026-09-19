import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mjd-hzkul.css';
import '../../css/y/y3p4a8bgr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mjd-hzkul"/><circle class="y3p4a8bgr"/></g>`,
		"fallback": "bytesize:lock",
	});
}

export default Component;
