import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5ndsbo2i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5ndsbo2i"/>`,
		"fallback": "roentgen:steak-and-fork",
	});
}

export default Component;
