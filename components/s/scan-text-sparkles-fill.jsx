import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xnxgw3bke.css';
import '../../css/a/apcmxib4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xnxgw3bke"/><path class="apcmxib4e"/></g>`,
		"fallback": "keyline-icons:scan-text-sparkles-fill",
	});
}

export default Component;
