import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktp1mbiey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ktp1mbiey"/>`,
		"fallback": "solar:monitor-smartphone-outline",
	});
}

export default Component;
