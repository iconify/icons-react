import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vws3t-8ts.css';

const viewBox = {"width":2048,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vws3t-8ts"/>`,
		"fallback": "fa:toggle-off",
	});
}

export default Component;
