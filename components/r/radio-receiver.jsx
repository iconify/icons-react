import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yp4f68blr.css';
import '../../css/v/vzyv8dwha.css';
import '../../css/y/y6e3kecwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yp4f68blr"/><rect class="vzyv8dwha"/><path class="y6e3kecwn"/></g>`,
		"fallback": "lucide:radio-receiver",
	});
}

export default Component;
