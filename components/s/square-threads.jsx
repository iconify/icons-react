import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h89o8pbnd.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h89o8pbnd"/>`,
		"fallback": "fa7-brands:square-threads",
	});
}

export default Component;
