import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1nmm7blt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1nmm7blt"/>`,
		"fallback": "selfhst:push-security-dark",
	});
}

export default Component;
