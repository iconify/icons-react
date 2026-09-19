import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pwhf0db-z.css';
import '../../css/d/d18ycsb5v.css';
import '../../css/w/wov5-s89s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pwhf0db-z"/><path class="d18ycsb5v"/><path class="wov5-s89s"/></g>`,
		"fallback": "at-icons:rainbow",
	});
}

export default Component;
