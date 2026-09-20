import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yka491bul.css';
import '../../css/u/uopsawb3r.css';
import '../../css/v/v18m34dtc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yka491bul"/><path class="uopsawb3r"/><path class="v18m34dtc"/></g>`,
		"fallback": "mage:notification-bell-snooze-2",
	});
}

export default Component;
