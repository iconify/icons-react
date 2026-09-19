import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_o02bbts.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_o02bbts"/>`,
		"fallback": "whh:pixelarrow",
	});
}

export default Component;
