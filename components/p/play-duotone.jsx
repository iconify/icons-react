import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mbafty-jz.css';
import '../../css/q/q8iwjmb0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mbafty-jz"/><path class="q8iwjmb0n"/></g>`,
		"fallback": "lucide-extended:play-duotone",
	});
}

export default Component;
