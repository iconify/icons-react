import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1oz6gbaq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1oz6gbaq"/>`,
		"fallback": "teenyicons:search-small-outline",
	});
}

export default Component;
