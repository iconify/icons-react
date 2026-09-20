import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpk7z6bhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpk7z6bhp"/>`,
		"fallback": "mdi:vector-polyline-minus",
	});
}

export default Component;
