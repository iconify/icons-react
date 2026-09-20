import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/js0ml5b3s.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="js0ml5b3s"/>`,
		"fallback": "memory:peace",
	});
}

export default Component;
