import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8jto1bwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s8jto1bwd"/>`,
		"fallback": "keyline-icons:stop-duotone",
	});
}

export default Component;
