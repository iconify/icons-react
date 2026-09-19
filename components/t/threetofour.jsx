import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pufi5ikpy.css';

const viewBox = {"width":1025,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pufi5ikpy"/>`,
		"fallback": "whh:threetofour",
	});
}

export default Component;
