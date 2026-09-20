import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujne8eeaw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ujne8eeaw"/>`,
		"fallback": "selfhst:palo-alto-networks",
	});
}

export default Component;
