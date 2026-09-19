import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/y-1ye3yek.css';
import '../../css/r/r7waqsbob.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="y-1ye3yek"/><path class="r7waqsbob"/></g>`,
		"fallback": "fad:powerswitch",
	});
}

export default Component;
