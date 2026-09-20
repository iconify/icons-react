import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v8jt9kccr.css';
import '../../css/q/q6wnbrnhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="v8jt9kccr"/><path class="q6wnbrnhv"/></g>`,
		"fallback": "reicon:messages3",
	});
}

export default Component;
