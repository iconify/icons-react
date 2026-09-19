import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s04b96bxu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s04b96bxu"/>`,
		"fallback": "ion:ios-add",
	});
}

export default Component;
