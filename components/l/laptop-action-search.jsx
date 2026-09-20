import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/t5sg05faq.css';
import '../../css/e/e3gqcdcpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="t5sg05faq"/><path class="e3gqcdcpa"/></g>`,
		"fallback": "streamline-freehand:laptop-action-search",
	});
}

export default Component;
