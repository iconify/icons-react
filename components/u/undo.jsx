import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/ez8wj_bdu.css';
import '../../css/l/l4l2e4iac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ez8wj_bdu"/><path class="l4l2e4iac"/></g>`,
		"fallback": "mynaui:undo",
	});
}

export default Component;
