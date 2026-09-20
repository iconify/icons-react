import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/js03r1bek.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="js03r1bek"/>`,
		"fallback": "lsicon:pie-one-outline",
	});
}

export default Component;
