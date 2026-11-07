import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1h75hc1u.css';
import '../../css/l/lhcz5yp5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1h75hc1u"/><path clip-rule="evenodd" class="lhcz5yp5e"/>`,
		"fallback": "solar:slider-vertical-minimalistic-bold-duotone",
	});
}

export default Component;
