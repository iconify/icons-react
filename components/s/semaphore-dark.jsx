import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wh4x1nwdf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wh4x1nwdf"/>`,
		"fallback": "selfhst:semaphore-dark",
	});
}

export default Component;
