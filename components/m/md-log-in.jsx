import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y17d--b1p.css';
import '../../css/u/u2-ilg5vn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y17d--b1p"/><path class="u2-ilg5vn"/>`,
		"fallback": "ion:md-log-in",
	});
}

export default Component;
