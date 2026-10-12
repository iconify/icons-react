import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cjqq4fblg.css';
import '../../css/j/jeqtdlb7k.css';
import '../../css/y/yplpaeb1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cjqq4fblg"/><path class="jeqtdlb7k"/><path class="yplpaeb1m"/></g>`,
		"fallback": "lucide-extended:search-x-duotone",
	});
}

export default Component;
