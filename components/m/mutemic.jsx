import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fp4tjqb0b.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fp4tjqb0b"/>`,
		"fallback": "whh:mutemic",
	});
}

export default Component;
