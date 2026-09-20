import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9yt2iblu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9yt2iblu"/>`,
		"fallback": "rivet-icons:share-solid",
	});
}

export default Component;
