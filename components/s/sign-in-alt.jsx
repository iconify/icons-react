import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3qy1r37f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i3qy1r37f"/>`,
		"fallback": "vaadin:sign-in-alt",
	});
}

export default Component;
