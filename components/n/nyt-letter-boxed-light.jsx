import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gw3_0y36g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gw3_0y36g"/>`,
		"fallback": "selfhst:nyt-letter-boxed-light",
	});
}

export default Component;
