import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fbg2v3buj.css';
import '../../css/r/r02ssjbhp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fbg2v3buj"/><path class="r02ssjbhp"/></g>`,
		"fallback": "bi:people-circle",
	});
}

export default Component;
