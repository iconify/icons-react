import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/drpy59pns.css';
import '../../css/x/x5d2dtuag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="drpy59pns"/><path class="wm-a x5d2dtuag"/></g>`,
		"fallback": "withicons:panel-left-open-solid",
	});
}

export default Component;
