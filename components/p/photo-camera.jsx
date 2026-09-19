import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rqgdy0bko.css';
import '../../css/a/abjo-7lgo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="rqgdy0bko"/><path class="abjo-7lgo"/></g>`,
		"fallback": "pepicons:photo-camera",
	});
}

export default Component;
