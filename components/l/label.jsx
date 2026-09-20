import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kyb9wbc3t.css';
import '../../css/d/d6hq_bboy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="kyb9wbc3t"/><path class="d6hq_bboy"/></g>`,
		"fallback": "pepicons-pencil:label",
	});
}

export default Component;
