import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qjql2tbsq.css';
import '../../css/t/tc2z-90dr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qjql2tbsq"/><path class="tc2z-90dr"/></g>`,
		"fallback": "keyline-icons:scan-barcode-duotone",
	});
}

export default Component;
