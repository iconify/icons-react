import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upthw4bwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="upthw4bwp"/>`,
		"fallback": "ri:water-percent-fill",
	});
}

export default Component;
