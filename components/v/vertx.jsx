import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/td2ntbexb.css';
import '../../css/w/w74p6ub3q.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="td2ntbexb"/><path class="w74p6ub3q"/>`,
		"fallback": "devicon:vertx",
	});
}

export default Component;
