import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kt8b88eid.css';
import '../../css/p/pkcfdfbtu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kt8b88eid"/><path class="pkcfdfbtu"/></g>`,
		"fallback": "hugeicons:rocket-01",
	});
}

export default Component;
