import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-9z98bit.css';
import '../../css/w/wl_vulm8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-9z98bit"/><path class="wl_vulm8o"/>`,
		"fallback": "solar:trash-bin-2-bold",
	});
}

export default Component;
