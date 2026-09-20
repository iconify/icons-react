import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmx3q3erz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmx3q3erz"/>`,
		"fallback": "vaadin:terminal",
	});
}

export default Component;
