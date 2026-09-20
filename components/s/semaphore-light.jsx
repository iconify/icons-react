import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avrte1b7t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avrte1b7t"/>`,
		"fallback": "selfhst:semaphore-light",
	});
}

export default Component;
