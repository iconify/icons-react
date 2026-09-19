import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9-buhbhu.css';

const viewBox = {"width":704,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9-buhbhu"/>`,
		"fallback": "whh:lifehacker",
	});
}

export default Component;
