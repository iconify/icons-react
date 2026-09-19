import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w05eedbft.css';

const viewBox = {"width":1025,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w05eedbft"/>`,
		"fallback": "whh:projectforkdelete",
	});
}

export default Component;
