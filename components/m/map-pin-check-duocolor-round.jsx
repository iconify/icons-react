import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vu_mukbdk.css';
import '../../css/p/pmsjm7ivf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vu_mukbdk"/><path class="pmsjm7ivf"/></g>`,
		"fallback": "coolicons:map-pin-check-duocolor-round",
	});
}

export default Component;
