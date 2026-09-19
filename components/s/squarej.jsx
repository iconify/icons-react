import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvc00ab_j.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvc00ab_j"/>`,
		"fallback": "whh:squarej",
	});
}

export default Component;
