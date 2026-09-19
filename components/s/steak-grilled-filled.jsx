import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sulgjdb9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sulgjdb9p"/>`,
		"fallback": "griddy-icons:steak-grilled-filled",
	});
}

export default Component;
