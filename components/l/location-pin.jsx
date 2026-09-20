import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjtpz2b7v.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjtpz2b7v"/>`,
		"fallback": "simple-line-icons:location-pin",
	});
}

export default Component;
