import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nap34gsjf.css';
import '../../css/m/mo4qjgb4x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="nap34gsjf"/><path class="mo4qjgb4x"/></g>`,
		"fallback": "healthicons:question-triangle2x-outline",
	});
}

export default Component;
