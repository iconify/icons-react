import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsz5lqllk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rsz5lqllk"/>`,
		"fallback": "roentgen:pear",
	});
}

export default Component;
