import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rps0jex0n.css';
import '../../css/u/usm9v7bnk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rps0jex0n"/><path class="usm9v7bnk"/></g>`,
		"fallback": "at-icons:notepad",
	});
}

export default Component;
