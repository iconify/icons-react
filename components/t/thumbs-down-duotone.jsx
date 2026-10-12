import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q_2xf801s.css';
import '../../css/y/y8_ae0vgj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q_2xf801s"/><path class="y8_ae0vgj"/></g>`,
		"fallback": "lucide-extended:thumbs-down-duotone",
	});
}

export default Component;
