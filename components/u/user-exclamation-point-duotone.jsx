import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/msn50pbup.css';
import '../../css/d/dvxborbhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="msn50pbup"/><path class="dvxborbhv"/></g>`,
		"fallback": "lucide-extended:user-exclamation-point-duotone",
	});
}

export default Component;
