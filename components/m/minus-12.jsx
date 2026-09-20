import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ake4l8bqo.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ake4l8bqo"/>`,
		"fallback": "qlementine-icons:minus-12",
	});
}

export default Component;
