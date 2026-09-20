import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vkncb7blc.css';
import '../../css/y/y_guo854f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vkncb7blc"/><path class="y_guo854f"/>`,
		"fallback": "vaadin:padding-right",
	});
}

export default Component;
