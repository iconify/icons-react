import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njmo_acwh.css';

const viewBox = {"width":384,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njmo_acwh"/>`,
		"fallback": "zmdi:pin-off",
	});
}

export default Component;
