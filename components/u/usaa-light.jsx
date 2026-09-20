import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wzt857t0c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wzt857t0c"/>`,
		"fallback": "selfhst:usaa-light",
	});
}

export default Component;
