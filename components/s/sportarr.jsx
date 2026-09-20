import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c68ggabft.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c68ggabft"/>`,
		"fallback": "selfhst:sportarr",
	});
}

export default Component;
