import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4jimy5zh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4jimy5zh"/>`,
		"fallback": "selfhst:snikket-light",
	});
}

export default Component;
