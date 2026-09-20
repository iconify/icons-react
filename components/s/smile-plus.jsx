import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kra_f0veo.css';
import '../../css/w/w1_1d2bcv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kra_f0veo"/><path class="w1_1d2bcv"/></g>`,
		"fallback": "lucide:smile-plus",
	});
}

export default Component;
