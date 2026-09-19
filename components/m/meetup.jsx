import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/teqd7yb-q.css';

const viewBox = {"width":1856,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="teqd7yb-q"/>`,
		"fallback": "fa:meetup",
	});
}

export default Component;
