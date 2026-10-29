import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/txn_7sbfw.css';
import '../../css/x/x3-9faclu.css';
import '../../css/w/wxwl6_qzl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="txn_7sbfw"/><path class="wm-shadow x3-9faclu"/><path class="wxwl6_qzl"/></g>`,
		"fallback": "withicons:message-circle-engrave",
	});
}

export default Component;
