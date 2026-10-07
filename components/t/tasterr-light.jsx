import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9gpkabim.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9gpkabim"/>`,
		"fallback": "selfhst:tasterr-light",
	});
}

export default Component;
