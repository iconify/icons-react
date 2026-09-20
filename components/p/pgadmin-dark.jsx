import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v7x28nk9h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v7x28nk9h"/>`,
		"fallback": "selfhst:pgadmin-dark",
	});
}

export default Component;
