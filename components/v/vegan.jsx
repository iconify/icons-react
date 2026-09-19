import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jp64x_82s.css';
import '../../css/v/v984nccvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jp64x_82s"/><path class="v984nccvp"/></g>`,
		"fallback": "hugeicons:vegan",
	});
}

export default Component;
