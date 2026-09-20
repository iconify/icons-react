import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vd_9zuben.css';
import '../../css/n/nvn2bub8o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vd_9zuben"/><path class="nvn2bub8o"/>`,
		"fallback": "vaadin:minus-circle-o",
	});
}

export default Component;
