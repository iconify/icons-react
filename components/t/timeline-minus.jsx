import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sac4nqrrm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sac4nqrrm"/>`,
		"fallback": "mdi:timeline-minus",
	});
}

export default Component;
