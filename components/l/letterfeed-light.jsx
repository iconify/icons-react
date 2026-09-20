import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zp6fcs6dm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zp6fcs6dm"/>`,
		"fallback": "selfhst:letterfeed-light",
	});
}

export default Component;
