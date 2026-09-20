import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aco_-tbir.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aco_-tbir"/>`,
		"fallback": "picon:updown",
	});
}

export default Component;
