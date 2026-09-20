import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hnl6okbyg.css';
import '../../css/d/db9d_bb7i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hnl6okbyg"/><path class="db9d_bb7i"/>`,
		"fallback": "vaadin:storage",
	});
}

export default Component;
