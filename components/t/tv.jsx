import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/so8jkf05e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="so8jkf05e"/>`,
		"fallback": "roentgen:tv",
	});
}

export default Component;
