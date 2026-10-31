import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k8s1leb8y.css';
import '../../css/y/yfhcqibox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="k8s1leb8y"/><path class="yfhcqibox"/></g>`,
		"fallback": "coolicons:wavy-check-duocolor-round",
	});
}

export default Component;
