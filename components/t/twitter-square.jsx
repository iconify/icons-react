import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dqr0jdrun.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dqr0jdrun"/>`,
		"fallback": "vaadin:twitter-square",
	});
}

export default Component;
