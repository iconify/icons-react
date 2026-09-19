import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w494h98hw.css';

const viewBox = {"width":464,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w494h98hw"/>`,
		"fallback": "ps:pinboard",
	});
}

export default Component;
