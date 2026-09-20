import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rh_79lu8g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rh_79lu8g"/>`,
		"fallback": "uil:sad-cry",
	});
}

export default Component;
