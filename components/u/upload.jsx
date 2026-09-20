import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xofyrh50b.css';
import '../../css/k/k-n9lzbwz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xofyrh50b"/><path class="k-n9lzbwz"/>`,
		"fallback": "vaadin:upload",
	});
}

export default Component;
