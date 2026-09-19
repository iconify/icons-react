import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_3n6mb-i.css';

const viewBox = {"width":1025,"height":896};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_3n6mb-i"/>`,
		"fallback": "whh:mug",
	});
}

export default Component;
