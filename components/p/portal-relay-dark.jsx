import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtjor1x3d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dtjor1x3d"/>`,
		"fallback": "selfhst:portal-relay-dark",
	});
}

export default Component;
