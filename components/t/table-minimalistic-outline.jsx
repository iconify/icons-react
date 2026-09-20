import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ui3smtbwj.css';
import '../../css/c/c--lwacub.css';
import '../../css/j/j27-k4r2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ui3smtbwj"/><path class="c--lwacub"/><path class="j27-k4r2q"/></g>`,
		"fallback": "solar:table-minimalistic-outline",
	});
}

export default Component;
