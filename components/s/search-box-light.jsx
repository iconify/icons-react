import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujd6pxb0p.css';
import '../../css/k/k35tmdb5w.css';
import '../../css/k/k4leaeb2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ujd6pxb0p"/><path class="k35tmdb5w"/><path class="k4leaeb2y"/>`,
		"fallback": "stash:search-box-light",
	});
}

export default Component;
