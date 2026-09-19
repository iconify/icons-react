import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bt__3t6bm.css';
import '../../css/j/j9gaom6_i.css';
import '../../css/c/cnc8kxp4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bt__3t6bm"/><circle class="j9gaom6_i"/><circle class="cnc8kxp4p"/></g>`,
		"fallback": "hugeicons:tangent",
	});
}

export default Component;
