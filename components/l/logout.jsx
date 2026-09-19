import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6_snmbgf.css';

const viewBox = {"width":717,"height":672};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t6_snmbgf"/>`,
		"fallback": "ls:logout",
	});
}

export default Component;
