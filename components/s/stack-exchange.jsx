import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/th1r3u7ye.css';

const viewBox = {"width":1280,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="th1r3u7ye"/>`,
		"fallback": "fa:stack-exchange",
	});
}

export default Component;
