import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsmn988cu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jsmn988cu"/>`,
		"fallback": "bi:layout-wtf",
	});
}

export default Component;
