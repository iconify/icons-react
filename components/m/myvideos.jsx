import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3tby64at.css';

const viewBox = {"width":1025,"height":896};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v3tby64at"/>`,
		"fallback": "whh:myvideos",
	});
}

export default Component;
