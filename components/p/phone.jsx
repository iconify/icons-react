import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2pee6b7l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y2pee6b7l"/>`,
		"fallback": "roentgen:phone",
	});
}

export default Component;
