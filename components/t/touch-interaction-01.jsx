import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/ml0tjzrxc.css';
import '../../css/v/v_b54o0uv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ml0tjzrxc"/><path class="v_b54o0uv"/></g>`,
		"fallback": "hugeicons:touch-interaction-01",
	});
}

export default Component;
