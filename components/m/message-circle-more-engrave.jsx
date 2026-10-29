import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/x4lh-4uji.css';
import '../../css/x/x3-9faclu.css';
import '../../css/w/wxwl6_qzl.css';
import '../../css/n/nj-b-umte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="x4lh-4uji"/><path class="wm-shadow x3-9faclu"/><path class="wxwl6_qzl"/><path class="nj-b-umte wm-a"/></g>`,
		"fallback": "withicons:message-circle-more-engrave",
	});
}

export default Component;
