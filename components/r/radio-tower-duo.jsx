import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gveujlbog.css';
import '../../css/i/iib4vtwgi.css';
import '../../css/b/b88gxzbev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="gveujlbog"/><path class="iib4vtwgi wm-a"/><path class="b88gxzbev"/></g>`,
		"fallback": "withicons:radio-tower-duo",
	});
}

export default Component;
