import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gcuh318km.css';

const viewBox = {"width":960,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gcuh318km"/>`,
		"fallback": "fa:tumblr",
	});
}

export default Component;
