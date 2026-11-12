import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dj3b2hoai.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dj3b2hoai"/>`,
		"fallback": "selfhst:typemill-dark",
	});
}

export default Component;
