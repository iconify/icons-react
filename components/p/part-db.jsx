import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pa8h15bym.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pa8h15bym"/>`,
		"fallback": "selfhst:part-db",
	});
}

export default Component;
