import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yl1_x5b8l.css';
import '../../css/y/yxr65lbod.css';
import '../../css/e/exssnwb4a.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/v/vxg8xacdr.css';
import '../../css/m/myaizjqxw.css';
import '../../css/i/i3f66oplf.css';
import '../../css/z/z5i6escdq.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yl1_x5b8l"/><path class="yxr65lbod"/><path class="exssnwb4a"/><g class="jn8qy4bru"><path class="vxg8xacdr"/><path class="myaizjqxw"/><path class="i3f66oplf"/><path class="z5i6escdq"/></g>`,
		"fallback": "openmoji:monkey",
	});
}

export default Component;
