import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/se52wg45h.css';
import '../../css/c/c38uaibrn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="se52wg45h"/><path class="c38uaibrn"/>`,
		"fallback": "octicon:key-asterisk-16",
	});
}

export default Component;
