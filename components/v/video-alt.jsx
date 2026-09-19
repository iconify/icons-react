import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmwpo3s4r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmwpo3s4r"/>`,
		"fallback": "dashicons:video-alt",
	});
}

export default Component;
