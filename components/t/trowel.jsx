import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1iz4osgb.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1iz4osgb"/>`,
		"fallback": "fa7-solid:trowel",
	});
}

export default Component;
