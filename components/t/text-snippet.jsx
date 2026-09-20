import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xae4rbczk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xae4rbczk"/>`,
		"fallback": "ri:text-snippet",
	});
}

export default Component;
