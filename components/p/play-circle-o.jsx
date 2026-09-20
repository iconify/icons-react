import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vd_9zuben.css';
import '../../css/n/nbxt_1b6h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vd_9zuben"/><path class="nbxt_1b6h"/>`,
		"fallback": "vaadin:play-circle-o",
	});
}

export default Component;
