import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hk8c4eb9h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hk8c4eb9h"/>`,
		"fallback": "selfhst:lldap",
	});
}

export default Component;
