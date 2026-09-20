import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eibw0yt8b.css';
import '../../css/v/v45d8qbhf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eibw0yt8b"/><path class="v45d8qbhf"/>`,
		"fallback": "selfhst:microbin",
	});
}

export default Component;
