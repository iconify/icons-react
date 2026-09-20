import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yc1d4tesh.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yc1d4tesh"/>`,
		"fallback": "memory:key",
	});
}

export default Component;
