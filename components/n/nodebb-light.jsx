import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfb1qvbtr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfb1qvbtr"/>`,
		"fallback": "selfhst:nodebb-light",
	});
}

export default Component;
