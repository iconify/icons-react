import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wotd8qb6d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wotd8qb6d"/>`,
		"fallback": "selfhst:quetre-light",
	});
}

export default Component;
