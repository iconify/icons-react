import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yfrja6yxz.css';
import '../../css/p/piw5fw-vk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="yfrja6yxz"/><path class="piw5fw-vk"/></g>`,
		"fallback": "healthicons:speech-language-therapy",
	});
}

export default Component;
