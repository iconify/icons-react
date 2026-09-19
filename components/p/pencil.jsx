import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yz-o7sbor.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yz-o7sbor"/>`,
		"fallback": "icomoon-free:pencil",
	});
}

export default Component;
