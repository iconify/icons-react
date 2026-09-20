import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qj129sb-s.css';
import '../../css/r/rf2gvrbix.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qj129sb-s"/><path class="rf2gvrbix"/></g>`,
		"fallback": "pepicons-pencil:no-entry",
	});
}

export default Component;
