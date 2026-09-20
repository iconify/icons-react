import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbidn8bze.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbidn8bze"/>`,
		"fallback": "maki:optician-15",
	});
}

export default Component;
