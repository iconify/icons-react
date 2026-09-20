import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/s791_kbpt.css';
import '../../css/f/fb8bic1if.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="s791_kbpt"/><path class="fb8bic1if"/></g>`,
		"fallback": "pepicons-pencil:key",
	});
}

export default Component;
