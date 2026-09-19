import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zpmfjeb8z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zpmfjeb8z"/>`,
		"fallback": "icomoon-free:user-tie",
	});
}

export default Component;
