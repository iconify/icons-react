import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhu-10bri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhu-10bri"/>`,
		"fallback": "iconaut:pound-sterling-solid",
	});
}

export default Component;
