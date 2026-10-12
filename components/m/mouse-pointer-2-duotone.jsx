import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c9-6j9bsp.css';
import '../../css/n/na74aacgg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c9-6j9bsp"/><path class="na74aacgg"/></g>`,
		"fallback": "lucide-extended:mouse-pointer-2-duotone",
	});
}

export default Component;
