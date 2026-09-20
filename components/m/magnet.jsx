import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/paj2y1_tc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="paj2y1_tc"/>`,
		"fallback": "mdi:magnet",
	});
}

export default Component;
