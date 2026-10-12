import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rg3c-hb8r.css';
import '../../css/q/qbkn2frqz.css';
import '../../css/d/d2hyv4llv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rg3c-hb8r"/><path class="qbkn2frqz"/><path class="d2hyv4llv"/></g>`,
		"fallback": "lucide-extended:shopping-bag-duotone",
	});
}

export default Component;
