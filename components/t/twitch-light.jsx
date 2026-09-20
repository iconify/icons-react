import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9pu_gbnw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p9pu_gbnw"/>`,
		"fallback": "selfhst:twitch-light",
	});
}

export default Component;
