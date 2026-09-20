import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfks5kbda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfks5kbda"/>`,
		"fallback": "mdi:sack-percent",
	});
}

export default Component;
