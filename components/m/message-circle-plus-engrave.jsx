import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/v2s5k8bwo.css';
import '../../css/x/x3-9faclu.css';
import '../../css/w/wxwl6_qzl.css';
import '../../css/i/i0u0rnq4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="v2s5k8bwo wm-k"/><path class="wm-shadow x3-9faclu"/><path class="wm-k wxwl6_qzl"/><path class="i0u0rnq4a wm-a"/></g>`,
		"fallback": "withicons:message-circle-plus-engrave",
	});
}

export default Component;
