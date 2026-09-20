import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a00nwwb3o.css';
import '../../css/f/fdck00gde.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z1amj96bk.css';
import '../../css/w/w4f8gd1fo.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a00nwwb3o"/><path class="fdck00gde"/><g class="cuyn6tgcc"><path class="z1amj96bk"/><path class="w4f8gd1fo"/></g>`,
		"fallback": "iwwa:lock",
	});
}

export default Component;
