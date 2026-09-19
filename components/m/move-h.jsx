import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svy3we4zq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svy3we4zq"/>`,
		"fallback": "fontisto:move-h",
	});
}

export default Component;
