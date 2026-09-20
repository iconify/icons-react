import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsr4uac1z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nsr4uac1z"/>`,
		"fallback": "selfhst:temu-light",
	});
}

export default Component;
