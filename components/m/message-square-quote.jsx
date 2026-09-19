import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rvcd_fbtv.css';
import '../../css/t/tlo5x_psv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rvcd_fbtv"/><path class="tlo5x_psv"/></g>`,
		"fallback": "hugeicons:message-square-quote",
	});
}

export default Component;
