import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jt8qg7b3g.css';

const viewBox = {"width":1024,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jt8qg7b3g"/>`,
		"fallback": "fa:thermometer-0",
	});
}

export default Component;
