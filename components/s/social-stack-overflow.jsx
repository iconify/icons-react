import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jk86jvbyg.css';
import '../../css/d/d7o9i2bac.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jk86jvbyg"/><path class="d7o9i2bac"/></g>`,
		"fallback": "foundation:social-stack-overflow",
	});
}

export default Component;
