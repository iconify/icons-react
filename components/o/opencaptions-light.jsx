import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rch741b8p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rch741b8p"/>`,
		"fallback": "selfhst:opencaptions-light",
	});
}

export default Component;
