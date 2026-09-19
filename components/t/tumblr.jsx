import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jo4zvdutc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jo4zvdutc"/>`,
		"fallback": "icomoon-free:tumblr",
	});
}

export default Component;
