import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwm_mmbgi.css';
import '../../css/h/hwy34kbyx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwm_mmbgi"/><path class="hwy34kbyx"/>`,
		"fallback": "ion:ios-battery-dead",
	});
}

export default Component;
