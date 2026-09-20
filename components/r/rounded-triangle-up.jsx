import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nn5s0kk9k.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nn5s0kk9k"/>`,
		"fallback": "pinhead:rounded-triangle-up",
	});
}

export default Component;
