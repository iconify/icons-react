import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mi0x__bjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mi0x__bjf"/>`,
		"fallback": "mdi:vector-square",
	});
}

export default Component;
