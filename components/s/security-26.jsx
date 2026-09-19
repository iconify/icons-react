import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7xigcc8i.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j7xigcc8i"/>`,
		"fallback": "garden:security-26",
	});
}

export default Component;
