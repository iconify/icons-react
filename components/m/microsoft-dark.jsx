import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbcw621xn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbcw621xn"/>`,
		"fallback": "selfhst:microsoft-dark",
	});
}

export default Component;
