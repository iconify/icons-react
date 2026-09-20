import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d69ufpi7t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d69ufpi7t"/>`,
		"fallback": "selfhst:kubuntu-light",
	});
}

export default Component;
