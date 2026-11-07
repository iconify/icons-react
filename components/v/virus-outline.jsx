import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxe5oobko.css';
import '../../css/w/wz_eimbrd.css';
import '../../css/h/h1vbpgb6s.css';
import '../../css/y/ywjd16bsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mxe5oobko"/><path clip-rule="evenodd" class="wz_eimbrd"/><path class="h1vbpgb6s"/><path clip-rule="evenodd" class="ywjd16bsf"/>`,
		"fallback": "solar:virus-outline",
	});
}

export default Component;
