import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wp3f46b8r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wp3f46b8r"/>`,
		"fallback": "selfhst:portainer",
	});
}

export default Component;
