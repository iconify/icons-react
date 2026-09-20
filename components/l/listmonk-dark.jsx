import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgew44bca.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgew44bca"/>`,
		"fallback": "selfhst:listmonk-dark",
	});
}

export default Component;
