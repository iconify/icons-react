import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/i1s0wx79o.css';
import '../../css/h/h5ru2tbbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="i1s0wx79o"/><path class="h5ru2tbbr"/></g>`,
		"fallback": "mynaui:redo",
	});
}

export default Component;
