import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2qncv8ux.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o2qncv8ux"/>`,
		"fallback": "streamline-block:text-formatting-ordered-list",
	});
}

export default Component;
