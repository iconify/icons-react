import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ygrbvktgc.css';
import '../../css/p/pk73xqwph.css';
import '../../css/u/ui2vj1xuf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ygrbvktgc"/><path class="pk73xqwph"/><path class="ui2vj1xuf"/></g>`,
		"fallback": "lucide-extended:scooter-duotone",
	});
}

export default Component;
