import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q-8ayvglf.css';
import '../../css/d/d7vtwbc6k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="q-8ayvglf"/><path class="d7vtwbc6k"/></g>`,
		"fallback": "pepicons-print:triangle-up-filled",
	});
}

export default Component;
