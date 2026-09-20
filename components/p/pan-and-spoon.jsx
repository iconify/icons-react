import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzoz0rb9n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzoz0rb9n"/>`,
		"fallback": "roentgen:pan-and-spoon",
	});
}

export default Component;
