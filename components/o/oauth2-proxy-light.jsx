import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjg59kbok.css';
import '../../css/k/kdlzsghls.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjg59kbok"/><path class="kdlzsghls"/>`,
		"fallback": "selfhst:oauth2-proxy-light",
	});
}

export default Component;
