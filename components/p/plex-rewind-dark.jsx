import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkh-nabnb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkh-nabnb"/>`,
		"fallback": "selfhst:plex-rewind-dark",
	});
}

export default Component;
