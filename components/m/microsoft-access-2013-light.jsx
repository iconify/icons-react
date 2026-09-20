import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxlw5-52r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxlw5-52r"/>`,
		"fallback": "selfhst:microsoft-access-2013-light",
	});
}

export default Component;
