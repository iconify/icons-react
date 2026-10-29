import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xdngo7fgi.css';
import '../../css/y/y33c0nqyp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="xdngo7fgi"/><path class="wm-a y33c0nqyp"/></g>`,
		"fallback": "withicons:scale-solid",
	});
}

export default Component;
