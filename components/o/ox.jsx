import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rt71oo3zh.css';
import '../../css/w/w6v346ini.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/r/r3zdxib9o.css';
import '../../css/v/v7331qb3y.css';
import '../../css/n/nejkym4sf.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rt71oo3zh"/><path class="w6v346ini"/><g class="jn8qy4bru"><path class="r3zdxib9o"/><path class="v7331qb3y"/><path class="nejkym4sf"/></g>`,
		"fallback": "openmoji:ox",
	});
}

export default Component;
