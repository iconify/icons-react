import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wwwul8bfc.css';
import '../../css/y/yt92c7j6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wwwul8bfc"/><path class="wm-a yt92c7j6g"/></g>`,
		"fallback": "withicons:soup-solid",
	});
}

export default Component;
