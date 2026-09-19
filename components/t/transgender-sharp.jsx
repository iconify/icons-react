import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esy6n4bsg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esy6n4bsg"/>`,
		"fallback": "ion:transgender-sharp",
	});
}

export default Component;
