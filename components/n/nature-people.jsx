import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1e6-lqkv.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1e6-lqkv"/>`,
		"fallback": "zmdi:nature-people",
	});
}

export default Component;
