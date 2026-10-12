import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lc5v3gbaq.css';
import '../../css/c/cust0bcyw.css';
import '../../css/y/yz1489b0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lc5v3gbaq"/><path class="cust0bcyw"/><path class="yz1489b0v"/></g>`,
		"fallback": "lucide-extended:toothbrush-duotone",
	});
}

export default Component;
