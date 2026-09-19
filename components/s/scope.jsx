import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dqf-rdblp.css';
import '../../css/v/vpzju-cqu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dqf-rdblp"/><path class="vpzju-cqu"/></g>`,
		"fallback": "et:scope",
	});
}

export default Component;
