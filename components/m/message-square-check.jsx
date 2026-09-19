import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rvcd_fbtv.css';
import '../../css/e/eskloab_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rvcd_fbtv"/><path class="eskloab_i"/></g>`,
		"fallback": "hugeicons:message-square-check",
	});
}

export default Component;
