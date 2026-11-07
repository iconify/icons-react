import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shc5ox2kp.css';
import '../../css/k/kpdxftb_g.css';
import '../../css/w/wi_334vbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shc5ox2kp"/><path clip-rule="evenodd" class="kpdxftb_g"/><path class="wi_334vbz"/>`,
		"fallback": "solar:running-2-bold-duotone",
	});
}

export default Component;
