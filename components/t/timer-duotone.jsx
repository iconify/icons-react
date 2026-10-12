import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v4r90_b8l.css';
import '../../css/y/y860l-blr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v4r90_b8l"/><path class="y860l-blr"/></g>`,
		"fallback": "lucide-extended:timer-duotone",
	});
}

export default Component;
