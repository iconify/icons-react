import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/r6aqwubay.css';
import '../../css/o/o542s9bss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="r6aqwubay"/><path class="o542s9bss"/></g>`,
		"fallback": "evicons:streetlight-charging",
	});
}

export default Component;
