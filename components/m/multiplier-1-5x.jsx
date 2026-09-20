import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcruj4cal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcruj4cal"/>`,
		"fallback": "tabler:multiplier-1-5x",
	});
}

export default Component;
