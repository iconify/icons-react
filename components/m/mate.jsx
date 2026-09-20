import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qcm4kccyx.css';
import '../../css/s/stlfwfbcz.css';
import '../../css/j/j3-9st8-f.css';
import '../../css/t/trifoi79u.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/x/x72vnxbzt.css';
import '../../css/u/uxsiryb4d.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qcm4kccyx"/><path class="stlfwfbcz"/><path class="j3-9st8-f"/><path class="trifoi79u"/><g class="jn8qy4bru"><path class="x72vnxbzt"/><path class="uxsiryb4d"/></g>`,
		"fallback": "openmoji:mate",
	});
}

export default Component;
