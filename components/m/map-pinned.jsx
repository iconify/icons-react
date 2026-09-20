import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/d-76f3e8z.css';
import '../../css/w/wf79gda8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="d-76f3e8z"/><path class="wf79gda8d"/></g>`,
		"fallback": "mynaui:map-pinned",
	});
}

export default Component;
