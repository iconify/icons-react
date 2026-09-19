import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rr0w__b2k.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rr0w__b2k"/>`,
		"fallback": "fa7-brands:square-lastfm",
	});
}

export default Component;
