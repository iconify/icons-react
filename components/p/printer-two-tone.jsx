import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/inkjfzfsc.css';
import '../../css/g/gi78_zuta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="inkjfzfsc"/><path class="gi78_zuta"/></g>`,
		"fallback": "keyline-icons:printer-two-tone",
	});
}

export default Component;
