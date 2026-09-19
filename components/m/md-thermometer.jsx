import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhz84bc7c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhz84bc7c"/>`,
		"fallback": "ion:md-thermometer",
	});
}

export default Component;
