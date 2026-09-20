import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0sdl1bdt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s0sdl1bdt"/>`,
		"fallback": "selfhst:polaris-dark",
	});
}

export default Component;
