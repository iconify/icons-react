import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/co1d7b4qk.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="co1d7b4qk"/>`,
		"fallback": "whh:slideronefull",
	});
}

export default Component;
