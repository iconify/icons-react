import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvz9b_w7t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvz9b_w7t"/>`,
		"fallback": "selfhst:medialyze",
	});
}

export default Component;
