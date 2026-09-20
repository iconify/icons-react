import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g88r1cckn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g88r1cckn"/>`,
		"fallback": "vaadin:thumbs-down",
	});
}

export default Component;
