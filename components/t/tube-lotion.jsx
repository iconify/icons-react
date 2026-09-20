import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/olasjbcef.css';
import '../../css/o/ogo1ktbop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="olasjbcef"/><path class="ogo1ktbop"/></g>`,
		"fallback": "lucide:tube-lotion",
	});
}

export default Component;
