import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j09ggre1y.css';
import '../../css/y/ymeccpebe.css';
import '../../css/o/op38unb-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j09ggre1y"/><path class="ymeccpebe"/><path class="op38unb-k"/></g>`,
		"fallback": "lucide-extended:mop-duotone",
	});
}

export default Component;
