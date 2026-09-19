import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwm_mmbgi.css';
import '../../css/h/hwy34kbyx.css';
import '../../css/j/j-4ki410r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwm_mmbgi"/><path class="hwy34kbyx"/><path class="j-4ki410r"/>`,
		"fallback": "ion:ios-battery-charging",
	});
}

export default Component;
