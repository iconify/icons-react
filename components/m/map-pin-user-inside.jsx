import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/is7m5ub9x.css';
import '../../css/c/c-8fi9pzg.css';
import '../../css/h/hgq_yhiaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="is7m5ub9x"/><path class="c-8fi9pzg"/><path class="hgq_yhiaf"/></g>`,
		"fallback": "mynaui:map-pin-user-inside",
	});
}

export default Component;
