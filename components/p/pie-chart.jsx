import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sgq5-yptf.css';
import '../../css/z/zb2pfgf5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sgq5-yptf"/><path class="zb2pfgf5e"/></g>`,
		"fallback": "lucide:pie-chart",
	});
}

export default Component;
