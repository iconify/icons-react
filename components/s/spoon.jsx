import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ze43ctp2g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ze43ctp2g"/>`,
		"fallback": "vaadin:spoon",
	});
}

export default Component;
