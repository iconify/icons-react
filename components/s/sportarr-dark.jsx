import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwj0upb9i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwj0upb9i"/>`,
		"fallback": "selfhst:sportarr-dark",
	});
}

export default Component;
