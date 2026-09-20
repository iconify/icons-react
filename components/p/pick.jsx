import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q1jwqxbwc.css';
import '../../css/o/onmnzxzya.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/h/hqn-ljbgu.css';
import '../../css/s/s8lqfob4z.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q1jwqxbwc"/><path class="onmnzxzya"/><g class="jn8qy4bru"><path class="hqn-ljbgu"/><path class="s8lqfob4z"/></g>`,
		"fallback": "openmoji:pick",
	});
}

export default Component;
