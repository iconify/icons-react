import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eae__35ku.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eae__35ku"/>`,
		"fallback": "game-icons:nose-side",
	});
}

export default Component;
