import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cewcvmcdv.css';
import '../../css/l/lh-0l8bom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cewcvmcdv"/><path class="lh-0l8bom"/></g>`,
		"fallback": "iconoir:strategy",
	});
}

export default Component;
