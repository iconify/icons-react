import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7h48wb1k.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r7h48wb1k"/>`,
		"fallback": "whh:sale",
	});
}

export default Component;
