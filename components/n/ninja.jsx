import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pekzi00tw.css';

const viewBox = {"width":1792,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pekzi00tw"/>`,
		"fallback": "vs:ninja",
	});
}

export default Component;
