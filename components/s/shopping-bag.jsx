import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/r6z808btb.css';
import '../../css/q/qkah8mg9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="r6z808btb"/><path class="qkah8mg9a"/></g>`,
		"fallback": "reicon:shopping-bag",
	});
}

export default Component;
