import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3ibv6b2a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3ibv6b2a"/>`,
		"fallback": "academicons:preregistered-de-tc-plus",
	});
}

export default Component;
