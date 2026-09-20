import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlh2t63ch.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wlh2t63ch"/>`,
		"fallback": "vaadin:lines-list",
	});
}

export default Component;
