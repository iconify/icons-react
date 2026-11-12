import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r84g82b_v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r84g82b_v"/>`,
		"fallback": "selfhst:nextbeats-dark",
	});
}

export default Component;
