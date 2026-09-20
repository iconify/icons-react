import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmolhw4eu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmolhw4eu"/>`,
		"fallback": "si:unfold-more-line",
	});
}

export default Component;
