import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6o5_008e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s6o5_008e"/>`,
		"fallback": "noviair:stove",
	});
}

export default Component;
