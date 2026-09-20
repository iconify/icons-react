import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kdck9ccwr.css';
import '../../css/y/yhm5_-cgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kdck9ccwr"/><path class="yhm5_-cgv"/></g>`,
		"fallback": "reicon:reserve",
	});
}

export default Component;
