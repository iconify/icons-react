import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ji3u0zbnc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ji3u0zbnc"/>`,
		"fallback": "icomoon-free:lastfm",
	});
}

export default Component;
