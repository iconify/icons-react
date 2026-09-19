import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kilwro9zd.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kilwro9zd"/>`,
		"fallback": "fa7-solid:thumbs-down",
	});
}

export default Component;
