import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hozhz6bfh.css';
import '../../css/d/d75k3fbhg.css';
import '../../css/c/c4ew_ccan.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="hozhz6bfh"/><path class="d75k3fbhg"/><path class="c4ew_ccan"/></g>`,
		"fallback": "healthicons:ui-settings2x-outline",
	});
}

export default Component;
