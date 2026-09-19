import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e25-plskk.css';

const viewBox = {"width":384,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e25-plskk"/>`,
		"fallback": "zmdi:receipt",
	});
}

export default Component;
