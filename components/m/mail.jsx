import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yt3e4cb6u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yt3e4cb6u"/>`,
		"fallback": "icomoon-free:mail",
	});
}

export default Component;
