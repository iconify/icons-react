import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsw6ydedy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hsw6ydedy"/>`,
		"fallback": "selfhst:laudspeaker-dark",
	});
}

export default Component;
