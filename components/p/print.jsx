import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbb25_i0b.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbb25_i0b"/>`,
		"fallback": "whh:print",
	});
}

export default Component;
