import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/ss58g-prf.css';
import '../../css/o/oqdxdpjwb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ss58g-prf"/><path class="oqdxdpjwb"/></g>`,
		"fallback": "coolicons:percent-duocolor-round",
	});
}

export default Component;
