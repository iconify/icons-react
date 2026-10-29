import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/i5wos9c5d.css';
import '../../css/a/a-y__sorz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="i5wos9c5d"/><path class="a-y__sorz wm-a"/></g>`,
		"fallback": "withicons:skip-forward-solid",
	});
}

export default Component;
