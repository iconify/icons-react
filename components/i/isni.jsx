import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrp_22dls.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrp_22dls"/>`,
		"fallback": "academicons:isni",
	});
}

export default Component;
