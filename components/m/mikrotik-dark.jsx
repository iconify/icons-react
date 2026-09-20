import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrzpyhb7s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrzpyhb7s"/>`,
		"fallback": "selfhst:mikrotik-dark",
	});
}

export default Component;
