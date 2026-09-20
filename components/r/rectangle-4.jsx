import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmv4w6tgg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmv4w6tgg"/>`,
		"fallback": "subway:rectangle-4",
	});
}

export default Component;
