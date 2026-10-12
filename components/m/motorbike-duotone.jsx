import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p9c978stu.css';
import '../../css/v/v2alfkblc.css';
import '../../css/j/jidmrvb8i.css';
import '../../css/s/stajzpbbw.css';
import '../../css/m/m0m9w9bkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p9c978stu"/><path class="v2alfkblc"/><path class="jidmrvb8i"/><path class="stajzpbbw"/><path class="m0m9w9bkh"/></g>`,
		"fallback": "lucide-extended:motorbike-duotone",
	});
}

export default Component;
