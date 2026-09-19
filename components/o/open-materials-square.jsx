import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q69k124zj.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q69k124zj"/>`,
		"fallback": "academicons:open-materials-square",
	});
}

export default Component;
