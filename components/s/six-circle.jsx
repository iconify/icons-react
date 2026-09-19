import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fchbuq2ke.css';
import '../../css/f/fvgh-ccoe.css';
import '../../css/g/g4zs08s-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fchbuq2ke"/><path class="fvgh-ccoe"/><path class="g4zs08s-q"/></g>`,
		"fallback": "hugeicons:six-circle",
	});
}

export default Component;
