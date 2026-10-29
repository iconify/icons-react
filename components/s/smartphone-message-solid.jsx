import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xh0mwsbku.css';
import '../../css/y/y6dkidbth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="xh0mwsbku"/><path class="wm-s y6dkidbth"/></g>`,
		"fallback": "withicons:smartphone-message-solid",
	});
}

export default Component;
