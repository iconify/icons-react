import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wpa29ob9b.css';
import '../../css/w/wf706-bwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wpa29ob9b"/><path class="wf706-bwm"/></g>`,
		"fallback": "lucide-extended:scan-heart-duotone",
	});
}

export default Component;
