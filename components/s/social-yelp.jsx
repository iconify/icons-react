import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xx3dyrmhx.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xx3dyrmhx"/>`,
		"fallback": "foundation:social-yelp",
	});
}

export default Component;
