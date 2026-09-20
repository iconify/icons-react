import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ta4qt8blo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ta4qt8blo"/>`,
		"fallback": "selfhst:obico",
	});
}

export default Component;
