import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwlye49zs.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwlye49zs"/>`,
		"fallback": "fa6-brands:linkedin-in",
	});
}

export default Component;
