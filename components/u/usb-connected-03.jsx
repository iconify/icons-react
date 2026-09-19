import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/ykrlbikfc.css';
import '../../css/s/s_xy5nbaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ykrlbikfc"/><path class="s_xy5nbaf"/></g>`,
		"fallback": "hugeicons:usb-connected-03",
	});
}

export default Component;
