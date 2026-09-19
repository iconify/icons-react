import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q543b0b-y.css';
import '../../css/c/c5zt3rbrc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="q543b0b-y"/><path class="c5zt3rbrc"/></g>`,
		"fallback": "healthicons:ppe-suit2x-outline",
	});
}

export default Component;
