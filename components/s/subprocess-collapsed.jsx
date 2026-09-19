import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7yff5b2a.css';
import '../../css/i/i0e1ugb7u.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(0 995.638)"><path class="u7yff5b2a"/><rect class="i0e1ugb7u"/></g>`,
		"fallback": "bpmn:subprocess-collapsed",
	});
}

export default Component;
