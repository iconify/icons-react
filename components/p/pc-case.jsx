import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/b-alg6mhi.css';
import '../../css/v/vsn7mmmxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="b-alg6mhi"/><path class="vsn7mmmxi"/></g>`,
		"fallback": "hugeicons:pc-case",
	});
}

export default Component;
