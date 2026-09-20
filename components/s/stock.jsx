import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nd6wzb_jt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nd6wzb_jt"/>`,
		"fallback": "vaadin:stock",
	});
}

export default Component;
