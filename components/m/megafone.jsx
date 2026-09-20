import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rx3ofnbit.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rx3ofnbit"/>`,
		"fallback": "vaadin:megafone",
	});
}

export default Component;
