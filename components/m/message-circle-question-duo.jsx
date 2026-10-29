import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/c1-gge6vc.css';
import '../../css/n/nt0n0fb6x.css';
import '../../css/w/wxwl6_qzl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="c1-gge6vc"/><path class="nt0n0fb6x wm-a"/><path class="wxwl6_qzl"/></g>`,
		"fallback": "withicons:message-circle-question-duo",
	});
}

export default Component;
