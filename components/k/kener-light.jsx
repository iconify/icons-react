import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2zdfbczm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2zdfbczm"/>`,
		"fallback": "selfhst:kener-light",
	});
}

export default Component;
