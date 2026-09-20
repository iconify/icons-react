import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbcg6dbft.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbcg6dbft"/>`,
		"fallback": "selfhst:voltaserve-light",
	});
}

export default Component;
