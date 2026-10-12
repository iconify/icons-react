import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mq21268yd.css';
import '../../css/s/so6tvsbua.css';
import '../../css/r/r6optbbbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mq21268yd"/><path class="so6tvsbua"/><path class="r6optbbbv"/></g>`,
		"fallback": "lucide-extended:popcorn-duotone",
	});
}

export default Component;
