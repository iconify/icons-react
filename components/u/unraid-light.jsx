import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ypl4acb8t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ypl4acb8t"/>`,
		"fallback": "selfhst:unraid-light",
	});
}

export default Component;
