import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ytlbb5b4z.css';
import '../../css/h/hoo05jbdp.css';
import '../../css/q/qi136vumn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ytlbb5b4z"/><path class="hoo05jbdp"/><path class="qi136vumn"/></g>`,
		"fallback": "lucide-extended:mouse-duotone",
	});
}

export default Component;
