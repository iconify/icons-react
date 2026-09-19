import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jnt21kr7t.css';
import '../../css/i/i2bw-2b8y.css';
import '../../css/g/gmn1ck5qx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="jnt21kr7t"/><path class="i2bw-2b8y"/><path class="gmn1ck5qx"/></g>`,
		"fallback": "flag:ml-1x1",
	});
}

export default Component;
