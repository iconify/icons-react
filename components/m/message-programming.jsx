import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/t/t_4na0bwt.css';
import '../../css/q/qo4n9sbwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="t_4na0bwt"/><path class="qo4n9sbwc"/></g>`,
		"fallback": "reicon:message-programming",
	});
}

export default Component;
