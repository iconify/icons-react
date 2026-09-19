import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pvrj2gyov.css';
import '../../css/o/oex8_ubip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pvrj2gyov"/><path class="oex8_ubip"/></g>`,
		"fallback": "hugeicons:time-setting-01",
	});
}

export default Component;
