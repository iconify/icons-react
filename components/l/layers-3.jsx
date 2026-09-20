import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ipfcx7q3o.css';
import '../../css/a/a15fw3nyo.css';
import '../../css/f/f2xdehcia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ipfcx7q3o"/><path class="a15fw3nyo"/><path class="f2xdehcia"/></g>`,
		"fallback": "lucide:layers-3",
	});
}

export default Component;
