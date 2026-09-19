import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e164d41mc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e164d41mc"/>`,
		"fallback": "ion:volume-low-sharp",
	});
}

export default Component;
