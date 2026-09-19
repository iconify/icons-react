import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9hmopbaj.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9hmopbaj"/>`,
		"fallback": "whh:smile",
	});
}

export default Component;
