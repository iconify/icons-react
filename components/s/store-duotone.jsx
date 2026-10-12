import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p1wyuju3y.css';
import '../../css/v/vklcjt5rj.css';
import '../../css/t/t_62qsbfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p1wyuju3y"/><path class="vklcjt5rj"/><path class="t_62qsbfj"/></g>`,
		"fallback": "lucide-extended:store-duotone",
	});
}

export default Component;
