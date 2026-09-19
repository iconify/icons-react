import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqb4_cwos.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqb4_cwos"/>`,
		"fallback": "whh:toast",
	});
}

export default Component;
