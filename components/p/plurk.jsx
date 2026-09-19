import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-63y2w0e.css';

const viewBox = {"width":408,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-63y2w0e"/>`,
		"fallback": "ps:plurk",
	});
}

export default Component;
