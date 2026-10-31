import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dqjr7ua5o.css';
import '../../css/l/lg-qqfb-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dqjr7ua5o"/><path class="lg-qqfb-f"/></g>`,
		"fallback": "coolicons:palette-duocolor-round",
	});
}

export default Component;
