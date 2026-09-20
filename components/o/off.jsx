import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d30o7nb4i.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d30o7nb4i"/>`,
		"fallback": "picon:off",
	});
}

export default Component;
