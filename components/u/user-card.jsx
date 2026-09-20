import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqe-vxb7s.css';
import '../../css/c/c_hslm9lm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqe-vxb7s"/><path class="c_hslm9lm"/>`,
		"fallback": "vaadin:user-card",
	});
}

export default Component;
