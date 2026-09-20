import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lze9kx9yx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lze9kx9yx"/>`,
		"fallback": "selfhst:rallly-dark",
	});
}

export default Component;
