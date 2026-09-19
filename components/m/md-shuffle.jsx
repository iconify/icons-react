import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtzx5nj7r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dtzx5nj7r"/>`,
		"fallback": "ion:md-shuffle",
	});
}

export default Component;
