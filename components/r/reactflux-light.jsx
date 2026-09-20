import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqjid6b5u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pqjid6b5u"/>`,
		"fallback": "selfhst:reactflux-light",
	});
}

export default Component;
