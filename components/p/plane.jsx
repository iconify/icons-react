import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgv4vrczp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgv4vrczp"/>`,
		"fallback": "simple-icons:plane",
	});
}

export default Component;
