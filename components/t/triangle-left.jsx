import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/co6r9esgs.css';
import '../../css/e/etgyz5bij.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="co6r9esgs"/><path class="etgyz5bij"/></g>`,
		"fallback": "pepicons-print:triangle-left",
	});
}

export default Component;
