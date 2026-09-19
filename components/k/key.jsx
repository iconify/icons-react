import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yr4438zbl.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yr4438zbl"/>`,
		"fallback": "ep:key",
	});
}

export default Component;
