import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bl7ixn8fa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bl7ixn8fa"/>`,
		"fallback": "selfhst:opentalk",
	});
}

export default Component;
