import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vu5ooqbyc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vu5ooqbyc"/>`,
		"fallback": "ion:ios-pulse",
	});
}

export default Component;
