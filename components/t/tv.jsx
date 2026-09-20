import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qj5gj-d9w.css';
import '../../css/q/qdn88l2uv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="qj5gj-d9w"/><path class="qdn88l2uv"/></g>`,
		"fallback": "proicons:tv",
	});
}

export default Component;
