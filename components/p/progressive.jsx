import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftn-ol_6o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftn-ol_6o"/>`,
		"fallback": "selfhst:progressive",
	});
}

export default Component;
