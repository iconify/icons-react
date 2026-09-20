import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rjyq_17yd.css';
import '../../css/n/n6k8vj2-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rjyq_17yd"/><path class="n6k8vj2-r"/></g>`,
		"fallback": "reicon:milk",
	});
}

export default Component;
