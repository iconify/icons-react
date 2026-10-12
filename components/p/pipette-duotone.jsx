import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ygrj4yfdy.css';
import '../../css/v/vk-tonb9y.css';
import '../../css/r/rdxk35b9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ygrj4yfdy"/><path class="vk-tonb9y"/><path class="rdxk35b9s"/></g>`,
		"fallback": "lucide-extended:pipette-duotone",
	});
}

export default Component;
