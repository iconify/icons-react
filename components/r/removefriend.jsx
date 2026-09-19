import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4t6h1u3b.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4t6h1u3b"/>`,
		"fallback": "whh:removefriend",
	});
}

export default Component;
