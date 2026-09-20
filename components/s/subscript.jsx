import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqxp1-bbn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqxp1-bbn"/>`,
		"fallback": "vaadin:subscript",
	});
}

export default Component;
