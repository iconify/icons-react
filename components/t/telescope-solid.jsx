import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/b-w4l4bws.css';
import '../../css/i/inp5_9bdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="b-w4l4bws"/><path class="inp5_9bdq wm-a"/></g>`,
		"fallback": "withicons:telescope-solid",
	});
}

export default Component;
