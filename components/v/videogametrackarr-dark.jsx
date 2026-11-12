import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7b9j-hgf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7b9j-hgf"/>`,
		"fallback": "selfhst:videogametrackarr-dark",
	});
}

export default Component;
