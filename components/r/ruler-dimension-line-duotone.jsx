import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u_nxkacko.css';
import '../../css/h/hx93ctksz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u_nxkacko"/><path class="hx93ctksz"/></g>`,
		"fallback": "lucide-extended:ruler-dimension-line-duotone",
	});
}

export default Component;
