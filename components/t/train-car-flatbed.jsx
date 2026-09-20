import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udzoj_brd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udzoj_brd"/>`,
		"fallback": "mdi:train-car-flatbed",
	});
}

export default Component;
