import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdh2c7bev.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdh2c7bev"/>`,
		"fallback": "roentgen:rumble-strip",
	});
}

export default Component;
