import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ui1nf2b0s.css';
import '../../css/h/hz0ng6bzi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ui1nf2b0s"/><path class="hz0ng6bzi"/></g>`,
		"fallback": "lucide-extended:pentagon-duotone",
	});
}

export default Component;
