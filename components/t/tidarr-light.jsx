import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aa6r0qb1c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aa6r0qb1c"/>`,
		"fallback": "selfhst:tidarr-light",
	});
}

export default Component;
