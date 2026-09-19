import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2uj__g_l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2uj__g_l"/>`,
		"fallback": "icons8:support",
	});
}

export default Component;
