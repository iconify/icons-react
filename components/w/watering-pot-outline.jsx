import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgtd15b3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgtd15b3w"/>`,
		"fallback": "mdi:watering-pot-outline",
	});
}

export default Component;
