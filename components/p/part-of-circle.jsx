import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjx051b5x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yjx051b5x"/>`,
		"fallback": "subway:part-of-circle",
	});
}

export default Component;
