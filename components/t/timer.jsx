import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5_1g1oqt.css';
import '../../css/i/inrili5tt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5_1g1oqt"/><path class="inrili5tt"/>`,
		"fallback": "circum:timer",
	});
}

export default Component;
