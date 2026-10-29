import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dm35f9njy.css';
import '../../css/l/l-rfgwb-j.css';
import '../../css/k/kb7-p4vrd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="dm35f9njy"/><path class="l-rfgwb-j"/><path class="kb7-p4vrd wm-a"/></g>`,
		"fallback": "withicons:log-out-duo",
	});
}

export default Component;
