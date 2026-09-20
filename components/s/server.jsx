import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jw5goxb_i.css';

const viewBox = {"width":12,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jw5goxb_i"/>`,
		"fallback": "octicon:server",
	});
}

export default Component;
