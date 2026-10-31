import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/obusvlbaq.css';
import '../../css/l/l6paavbvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="obusvlbaq"/><path class="l6paavbvb"/></g>`,
		"fallback": "coolicons:octagon-help-duocolor-round",
	});
}

export default Component;
