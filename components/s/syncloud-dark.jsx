import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/favsqtb0e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="favsqtb0e"/>`,
		"fallback": "selfhst:syncloud-dark",
	});
}

export default Component;
