import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xciwp3fdu.css';
import '../../css/s/skpv2s_fz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xciwp3fdu"/><path class="skpv2s_fz"/></g>`,
		"fallback": "hugeicons:phone-check",
	});
}

export default Component;
