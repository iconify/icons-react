import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfoq6jk8w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfoq6jk8w"/>`,
		"fallback": "ion:ios-arrow-round-forward",
	});
}

export default Component;
