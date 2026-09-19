import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2f-5pork.css';

const viewBox = {"width":1024,"height":960};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2f-5pork"/>`,
		"fallback": "whh:phoneold",
	});
}

export default Component;
