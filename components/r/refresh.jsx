import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l47qxzfbh.css';

const viewBox = {"width":344,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l47qxzfbh"/>`,
		"fallback": "zmdi:refresh",
	});
}

export default Component;
