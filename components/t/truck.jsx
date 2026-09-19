import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnsv-3qvh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnsv-3qvh"/>`,
		"fallback": "icomoon-free:truck",
	});
}

export default Component;
