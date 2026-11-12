import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b25a24pbc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b25a24pbc"/>`,
		"fallback": "selfhst:prowlarr-light",
	});
}

export default Component;
