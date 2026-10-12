import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fgu4rmb1d.css';
import '../../css/h/hupmt3b1b.css';
import '../../css/l/l5ipexjai.css';
import '../../css/o/o4feiio3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fgu4rmb1d"/><path class="hupmt3b1b"/><path class="l5ipexjai"/><path class="o4feiio3j"/></g>`,
		"fallback": "lucide-extended:rabbit-duotone",
	});
}

export default Component;
