import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c8_9t0b8w.css';
import '../../css/i/ikgnmspxa.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="c8_9t0b8w"/><path class="ikgnmspxa"/></g>`,
		"fallback": "lsicon:monitoring-filled",
	});
}

export default Component;
