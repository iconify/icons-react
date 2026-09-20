import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qb_el90_e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qb_el90_e"/>`,
		"fallback": "vaadin:tooth",
	});
}

export default Component;
