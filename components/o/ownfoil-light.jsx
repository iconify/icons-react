import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydol1y82a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ydol1y82a"/>`,
		"fallback": "selfhst:ownfoil-light",
	});
}

export default Component;
