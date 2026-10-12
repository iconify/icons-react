import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w8_aixbal.css';
import '../../css/s/s-tuz6vbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w8_aixbal"/><path class="s-tuz6vbg"/></g>`,
		"fallback": "lucide-extended:map-duotone",
	});
}

export default Component;
