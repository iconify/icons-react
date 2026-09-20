import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9ybud3eg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9ybud3eg"/>`,
		"fallback": "selfhst:miniflux-light",
	});
}

export default Component;
