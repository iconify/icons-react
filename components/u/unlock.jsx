import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a96pf-b5i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a96pf-b5i"/>`,
		"fallback": "vaadin:unlock",
	});
}

export default Component;
