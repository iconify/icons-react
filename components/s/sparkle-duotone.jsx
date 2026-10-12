import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m4__4mvqr.css';
import '../../css/m/m0glyo1pp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m4__4mvqr"/><path class="m0glyo1pp"/></g>`,
		"fallback": "lucide-extended:sparkle-duotone",
	});
}

export default Component;
