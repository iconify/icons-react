import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/uopsawb3r.css';
import '../../css/k/kga-j2b5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="uopsawb3r"/><path class="kga-j2b5e"/></g>`,
		"fallback": "mage:notification-bell-check",
	});
}

export default Component;
