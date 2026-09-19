import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hc691boul.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hc691boul"/>`,
		"fallback": "ion:ios-remove",
	});
}

export default Component;
