import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_jlntbkc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_jlntbkc"/>`,
		"fallback": "ion:ios-moon",
	});
}

export default Component;
