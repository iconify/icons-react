import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvtagiber.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvtagiber"/>`,
		"fallback": "f7:pin",
	});
}

export default Component;
