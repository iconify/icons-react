import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gc9zjubos.css';
import '../../css/d/d7vtwbc6k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="gc9zjubos"/><path class="d7vtwbc6k"/></g>`,
		"fallback": "pepicons-print:triangle-up",
	});
}

export default Component;
