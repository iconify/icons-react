import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9ohq6b2l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9ohq6b2l"/>`,
		"fallback": "at-icons:magnifying-glass",
	});
}

export default Component;
