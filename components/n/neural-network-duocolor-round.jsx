import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d8nrfkb-h.css';
import '../../css/g/gc6rcl_hw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="d8nrfkb-h"/><path class="gc6rcl_hw"/></g>`,
		"fallback": "coolicons:neural-network-duocolor-round",
	});
}

export default Component;
