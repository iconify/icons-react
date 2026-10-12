import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ws1d6xdgu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ws1d6xdgu"/>`,
		"fallback": "garden:person-stroke-20",
	});
}

export default Component;
