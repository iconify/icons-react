import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm7holb9n.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm7holb9n"/>`,
		"fallback": "fa7-brands:w3c",
	});
}

export default Component;
