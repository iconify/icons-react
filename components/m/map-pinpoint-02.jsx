import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/y-g_3kb1x.css';
import '../../css/a/a224lnbvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="y-g_3kb1x"/><path class="a224lnbvf"/></g>`,
		"fallback": "hugeicons:map-pinpoint-02",
	});
}

export default Component;
