import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3rlzx3hn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i3rlzx3hn"/>`,
		"fallback": "selfhst:transmission-light",
	});
}

export default Component;
