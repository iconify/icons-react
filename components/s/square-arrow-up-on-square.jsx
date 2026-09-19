import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0-2kjb3e.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0-2kjb3e"/>`,
		"fallback": "f7:square-arrow-up-on-square",
	});
}

export default Component;
