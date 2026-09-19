import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0t90ib5t.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0t90ib5t"/>`,
		"fallback": "whh:squarethree",
	});
}

export default Component;
