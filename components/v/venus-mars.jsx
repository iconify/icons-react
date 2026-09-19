import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wyg7nbc4l.css';

const viewBox = {"width":2048,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wyg7nbc4l"/>`,
		"fallback": "fa:venus-mars",
	});
}

export default Component;
