import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzui4_y6r.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzui4_y6r"/>`,
		"fallback": "whh:phonebook",
	});
}

export default Component;
