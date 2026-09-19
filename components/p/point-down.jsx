import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/li4g1kbwo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="li4g1kbwo"/>`,
		"fallback": "icomoon-free:point-down",
	});
}

export default Component;
