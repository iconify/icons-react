import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjcdnt86x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bjcdnt86x"/>`,
		"fallback": "selfhst:usaa-dark",
	});
}

export default Component;
