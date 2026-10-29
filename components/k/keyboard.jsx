import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a_-f_rbjf.css';
import '../../css/n/nl8u9ehql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="a_-f_rbjf"/><path class="nl8u9ehql wm-a"/></g>`,
		"fallback": "withicons:keyboard",
	});
}

export default Component;
