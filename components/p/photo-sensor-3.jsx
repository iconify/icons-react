import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_y1_nl1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_y1_nl1n"/>`,
		"fallback": "tabler:photo-sensor-3",
	});
}

export default Component;
