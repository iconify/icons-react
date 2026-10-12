import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f419oeb6n.css';
import '../../css/n/nbqssjb9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f419oeb6n"/><path class="nbqssjb9c"/></g>`,
		"fallback": "lucide-extended:radio-duotone",
	});
}

export default Component;
