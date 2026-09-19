import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjh0hj0uk.css';

const viewBox = {"width":2016,"height":1984};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjh0hj0uk"/>`,
		"fallback": "vs:panther",
	});
}

export default Component;
