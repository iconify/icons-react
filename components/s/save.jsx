import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjql5_bkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjql5_bkf"/>`,
		"fallback": "noviair-light:save",
	});
}

export default Component;
