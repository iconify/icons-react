import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vug20nb6u.css';
import '../../css/t/tvz5c1gug.css';
import '../../css/t/tjfe3abxl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vug20nb6u"/><path class="tvz5c1gug"/><path class="tjfe3abxl"/>`,
		"fallback": "selfhst:rhel-dark",
	});
}

export default Component;
