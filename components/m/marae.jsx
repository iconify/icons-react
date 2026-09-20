import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6hx33b-o.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s6hx33b-o"/>`,
		"fallback": "pinhead:marae",
	});
}

export default Component;
