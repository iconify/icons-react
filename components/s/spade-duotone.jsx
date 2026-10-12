import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e6wo38s5p.css';
import '../../css/g/gcbeb4qdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e6wo38s5p"/><path class="gcbeb4qdy"/></g>`,
		"fallback": "lucide-extended:spade-duotone",
	});
}

export default Component;
