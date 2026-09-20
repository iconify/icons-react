import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hy8doab7i.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hy8doab7i"/>`,
		"fallback": "picon:magnifier",
	});
}

export default Component;
