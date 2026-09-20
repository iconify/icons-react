import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hz9iuq2bb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hz9iuq2bb"/>`,
		"fallback": "vaadin:lifebuoy",
	});
}

export default Component;
