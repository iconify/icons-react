import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/drpy59pns.css';
import '../../css/o/ok2tcdbjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="drpy59pns"/><path class="ok2tcdbjz wm-a"/></g>`,
		"fallback": "withicons:panel-left-close-solid",
	});
}

export default Component;
