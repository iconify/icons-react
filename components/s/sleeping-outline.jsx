import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xx49zdisf.css';
import '../../css/i/i7h95ab6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="xx49zdisf"/><path class="i7h95ab6u"/></g>`,
		"fallback": "solar:sleeping-outline",
	});
}

export default Component;
