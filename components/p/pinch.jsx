import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbloczr4z.css';
import '../../css/p/p16id-nll.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/ndfjvjb0x.css';
import '../../css/f/fh2q1qbmo.css';
import '../../css/c/cpjgc658y.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbloczr4z"/><path class="p16id-nll"/><g class="cuyn6tgcc"><path class="ndfjvjb0x"/><path class="fh2q1qbmo"/></g><path class="cpjgc658y"/>`,
		"fallback": "iwwa:pinch",
	});
}

export default Component;
