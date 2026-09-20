import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsmnm9b9o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wsmnm9b9o"/>`,
		"fallback": "selfhst:linkwarden-light",
	});
}

export default Component;
