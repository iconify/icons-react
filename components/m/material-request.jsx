import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irbe8nbcd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="irbe8nbcd"/>`,
		"fallback": "carbon:material-request",
	});
}

export default Component;
