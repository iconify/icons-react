import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zut4hpbef.css';
import '../../css/t/tzagp_bxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zut4hpbef"/><path class="tzagp_bxl"/></g>`,
		"fallback": "mynaui:letter-o-waves",
	});
}

export default Component;
