import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vx9rmvvym.css';
import '../../css/s/srstv82zy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vx9rmvvym"/><path class="srstv82zy"/></g>`,
		"fallback": "codicon:mic-download",
	});
}

export default Component;
