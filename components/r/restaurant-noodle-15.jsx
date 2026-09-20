import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4r9pjegb.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y4r9pjegb"/>`,
		"fallback": "maki:restaurant-noodle-15",
	});
}

export default Component;
