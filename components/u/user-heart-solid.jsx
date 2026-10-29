import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/x20tc-cns.css';
import '../../css/h/hd_4o6bjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="x20tc-cns"/><path class="hd_4o6bjx wm-s"/></g>`,
		"fallback": "withicons:user-heart-solid",
	});
}

export default Component;
