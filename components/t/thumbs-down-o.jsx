import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1df35b5k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1df35b5k"/>`,
		"fallback": "vaadin:thumbs-down-o",
	});
}

export default Component;
