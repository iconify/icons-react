import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/imkk4rboc.css';
import '../../css/z/zyj2nd_gb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="imkk4rboc"/><path class="zyj2nd_gb"/></g>`,
		"fallback": "pepicons-pencil:photo-camera",
	});
}

export default Component;
