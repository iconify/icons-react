import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gity0fb6n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gity0fb6n"/>`,
		"fallback": "selfhst:librarything-dark",
	});
}

export default Component;
