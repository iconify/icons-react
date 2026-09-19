import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgh8nu16y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgh8nu16y"/>`,
		"fallback": "famicons:pause-sharp",
	});
}

export default Component;
