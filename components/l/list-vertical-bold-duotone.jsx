import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3eq_dbci.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/u/uv-otpbcn.css';
import '../../css/m/mhsc17o4r.css';
import '../../css/l/l63r2cc5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l3eq_dbci"/><g class="xtpeb-edw"><path class="uv-otpbcn"/><path class="mhsc17o4r"/><path class="l63r2cc5g"/></g>`,
		"fallback": "solar:list-vertical-bold-duotone",
	});
}

export default Component;
