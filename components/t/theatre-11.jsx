import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_luvib9v.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_luvib9v"/>`,
		"fallback": "maki:theatre-11",
	});
}

export default Component;
