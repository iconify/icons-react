import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/haboi89it.css';
import '../../css/x/x3-9faclu.css';
import '../../css/w/wxwl6_qzl.css';
import '../../css/a/a1x296bat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="haboi89it wm-k"/><path class="wm-shadow x3-9faclu"/><path class="wm-k wxwl6_qzl"/><path class="a1x296bat wm-a"/></g>`,
		"fallback": "withicons:message-circle-heart-engrave",
	});
}

export default Component;
