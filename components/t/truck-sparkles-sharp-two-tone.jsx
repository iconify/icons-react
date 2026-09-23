import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/c/cdixm-bmx.css';
import '../../css/z/zr5m9kbwl.css';
import '../../css/z/zzqgx-_3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="cdixm-bmx"/><path class="zr5m9kbwl"/><path class="zzqgx-_3m"/></g>`,
		"fallback": "keyline-icons:truck-sparkles-sharp-two-tone",
	});
}

export default Component;
