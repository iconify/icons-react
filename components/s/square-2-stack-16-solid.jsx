import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bsom-6btp.css';
import '../../css/h/hg4v63b4m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bsom-6btp"/><path class="hg4v63b4m"/></g>`,
		"fallback": "heroicons:square-2-stack-16-solid",
	});
}

export default Component;
