import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tjqshdbtp.css';
import '../../css/c/cwd4cqb-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tjqshdbtp"/><path class="cwd4cqb-x"/></g>`,
		"fallback": "mynaui:user-check",
	});
}

export default Component;
