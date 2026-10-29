import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/x7-n172fe.css';
import '../../css/s/sq6mpo2rw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="x7-n172fe"/><path class="sq6mpo2rw wm-a"/></g>`,
		"fallback": "withicons:tennis-solid",
	});
}

export default Component;
