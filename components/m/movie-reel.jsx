import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wnerrsv2u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wnerrsv2u"/>`,
		"fallback": "at-icons:movie-reel",
	});
}

export default Component;
