import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/ci0eyzb0i.css';
import '../../css/a/air46-bsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ci0eyzb0i"/><path class="air46-bsq"/></g>`,
		"fallback": "hugeicons:package-delivered",
	});
}

export default Component;
