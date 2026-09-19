import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lkdxq8b7i.css';
import '../../css/h/h5w6q1y6d.css';
import '../../css/t/tf7ojvbbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lkdxq8b7i"/><circle class="h5w6q1y6d"/><path class="tf7ojvbbo"/></g>`,
		"fallback": "hugeicons:swimming",
	});
}

export default Component;
