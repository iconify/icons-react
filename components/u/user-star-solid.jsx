import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/x20tc-cns.css';
import '../../css/h/hms-i6iyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="x20tc-cns"/><path class="hms-i6iyc wm-s"/></g>`,
		"fallback": "withicons:user-star-solid",
	});
}

export default Component;
