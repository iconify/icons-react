import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gl4-s_bqc.css';
import '../../css/a/arnw8bb-h.css';
import '../../css/a/a7not2p8q.css';
import '../../css/x/xe51jsboi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="gl4-s_bqc"/><path class="arnw8bb-h wm-a"/><path class="a7not2p8q"/><path class="wm-a xe51jsboi"/></g>`,
		"fallback": "withicons:text-cursor-input-duo",
	});
}

export default Component;
