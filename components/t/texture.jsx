import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ob13cz1oz.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ob13cz1oz"/>`,
		"fallback": "whh:texture",
	});
}

export default Component;
