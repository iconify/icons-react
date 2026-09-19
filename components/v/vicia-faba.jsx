import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/w/wrngtdykm.css';
import '../../css/y/yejqf6bhb.css';
import '../../css/m/m_aa5ccfu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="wrngtdykm"/><path class="yejqf6bhb"/><path class="m_aa5ccfu"/></g>`,
		"fallback": "icon-park-outline:vicia-faba",
	});
}

export default Component;
