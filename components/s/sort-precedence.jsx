import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f1_334bfg.css';
import '../../css/n/nb55azqyl.css';
import '../../css/p/puvg98k0x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f1_334bfg"/><path class="nb55azqyl"/><path class="puvg98k0x"/></g>`,
		"fallback": "codicon:sort-precedence",
	});
}

export default Component;
