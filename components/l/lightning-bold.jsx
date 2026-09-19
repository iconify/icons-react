import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/noajrcspp.css';
import '../../css/h/h8k8trncu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="noajrcspp"/><path class="h8k8trncu"/></g>`,
		"fallback": "glyphs:lightning-bold",
	});
}

export default Component;
