import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgflwv-4j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgflwv-4j"/>`,
		"fallback": "ion:plane",
	});
}

export default Component;
