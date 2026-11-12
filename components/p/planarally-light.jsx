import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixo81-b_z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixo81-b_z"/>`,
		"fallback": "selfhst:planarally-light",
	});
}

export default Component;
