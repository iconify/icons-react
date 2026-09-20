import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbgi26j-y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbgi26j-y"/>`,
		"fallback": "selfhst:proton",
	});
}

export default Component;
