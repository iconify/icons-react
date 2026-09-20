import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm2gwcclh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vm2gwcclh"/>`,
		"fallback": "selfhst:teamspeak",
	});
}

export default Component;
