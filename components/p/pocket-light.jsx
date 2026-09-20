import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rean51pzl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rean51pzl"/>`,
		"fallback": "selfhst:pocket-light",
	});
}

export default Component;
