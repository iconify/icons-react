import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vnahl7ehi.css';
import '../../css/z/zcodg1bpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vnahl7ehi"/><path class="zcodg1bpv"/></g>`,
		"fallback": "hugeicons:notification-off-01",
	});
}

export default Component;
