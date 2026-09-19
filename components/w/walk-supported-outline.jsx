import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g6dgffb_i.css';
import '../../css/i/ih_th9cov.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="g6dgffb_i"/><path class="ih_th9cov"/></g>`,
		"fallback": "healthicons:walk-supported-outline",
	});
}

export default Component;
