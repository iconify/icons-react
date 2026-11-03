import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqhc5bcgi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pqhc5bcgi"/>`,
		"fallback": "selfhst:rewindarr-dark",
	});
}

export default Component;
