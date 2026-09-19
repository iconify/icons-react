import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/k8j7sz1iu.css';
import '../../css/f/fe6rzzbsy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="k8j7sz1iu"/><path class="fe6rzzbsy"/></g>`,
		"fallback": "healthicons:sti-outline",
	});
}

export default Component;
