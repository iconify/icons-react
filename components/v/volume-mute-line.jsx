import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dq_yucbru.css';
import '../../css/u/u35tlzxcv.css';
import '../../css/h/hwx463bjm.css';
import '../../css/j/j-vx4_bue.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 dq_yucbru"/><path class="clr-i-outline clr-i-outline-path-2 u35tlzxcv"/><path class="clr-i-outline clr-i-outline-path-3 hwx463bjm"/><path class="clr-i-outline clr-i-outline-path-4 j-vx4_bue"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:volume-mute-line",
	});
}

export default Component;
