import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/es7yjkb-n.css';
import '../../css/h/hgq_yhiaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="es7yjkb-n"/><path class="hgq_yhiaf"/></g>`,
		"fallback": "mynaui:map-pin-check-inside",
	});
}

export default Component;
