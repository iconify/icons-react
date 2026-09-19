import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sx7r32bwf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sx7r32bwf"/>`,
		"fallback": "ion:md-arrow-round-back",
	});
}

export default Component;
