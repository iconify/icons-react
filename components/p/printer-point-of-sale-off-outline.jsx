import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbtbt0bbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbtbt0bbq"/>`,
		"fallback": "mdi:printer-point-of-sale-off-outline",
	});
}

export default Component;
