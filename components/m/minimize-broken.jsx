import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jyzi93bgq.css';
import '../../css/b/bvt-woblq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jyzi93bgq"/><path class="bvt-woblq"/></g>`,
		"fallback": "solar:minimize-broken",
	});
}

export default Component;
