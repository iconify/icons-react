import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpw57j1qs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpw57j1qs"/>`,
		"fallback": "ion:ios-thumbs-down",
	});
}

export default Component;
