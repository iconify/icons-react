import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_7xpqbny.css';

const viewBox = {"width":432,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_7xpqbny"/>`,
		"fallback": "zmdi:lastfm",
	});
}

export default Component;
