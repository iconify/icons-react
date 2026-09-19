import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/py46mcb9h.css';

const viewBox = {"width":448,"height":472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="py46mcb9h"/>`,
		"fallback": "ps:wand",
	});
}

export default Component;
