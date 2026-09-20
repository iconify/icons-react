import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vzi166bfk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vzi166bfk"/>`,
		"fallback": "selfhst:tiktok-light",
	});
}

export default Component;
