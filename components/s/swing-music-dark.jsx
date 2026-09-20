import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f08a3zbug.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f08a3zbug"/>`,
		"fallback": "selfhst:swing-music-dark",
	});
}

export default Component;
