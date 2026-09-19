import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgtb81bpi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgtb81bpi"/>`,
		"fallback": "ion:ios-arrow-thin-left",
	});
}

export default Component;
