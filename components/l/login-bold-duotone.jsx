import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8y2-tvlr.css';
import '../../css/q/qzm6rmb-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s8y2-tvlr"/><path class="qzm6rmb-d"/>`,
		"fallback": "solar:login-bold-duotone",
	});
}

export default Component;
