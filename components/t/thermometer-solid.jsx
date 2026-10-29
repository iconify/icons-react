import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fbuu11tkl.css';
import '../../css/v/vv35huhuu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="fbuu11tkl"/><path class="vv35huhuu wm-a"/></g>`,
		"fallback": "withicons:thermometer-solid",
	});
}

export default Component;
