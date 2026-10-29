import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dmfrml87i.css';
import '../../css/q/qrem-vb1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="dmfrml87i"/><path class="qrem-vb1q wm-a"/></g>`,
		"fallback": "withicons:search-x-solid",
	});
}

export default Component;
