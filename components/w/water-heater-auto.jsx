import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/snaj7oq1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="snaj7oq1n"/>`,
		"fallback": "mdi:water-heater-auto",
	});
}

export default Component;
