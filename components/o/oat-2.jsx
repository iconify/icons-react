import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3yj7wbhk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y3yj7wbhk"/>`,
		"fallback": "roentgen:oat-2",
	});
}

export default Component;
