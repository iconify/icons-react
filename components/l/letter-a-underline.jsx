import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fnhygubsb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fnhygubsb"/>`,
		"fallback": "gravity-ui:letter-a-underline",
	});
}

export default Component;
