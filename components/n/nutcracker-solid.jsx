import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/iqdz8sbba.css';
import '../../css/i/i-ocx9bpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="iqdz8sbba"/><path class="i-ocx9bpx wm-a"/></g>`,
		"fallback": "withicons:nutcracker-solid",
	});
}

export default Component;
