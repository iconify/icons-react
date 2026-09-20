import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/o29rtc-fb.css';
import '../../css/k/k9ul6qe9k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="o29rtc-fb"/><path class="k9ul6qe9k"/></g>`,
		"fallback": "pepicons-print:line-x",
	});
}

export default Component;
