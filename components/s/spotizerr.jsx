import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-89ydlgz.css';
import '../../css/v/vvinubbym.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-89ydlgz"/><path class="vvinubbym"/>`,
		"fallback": "selfhst:spotizerr",
	});
}

export default Component;
