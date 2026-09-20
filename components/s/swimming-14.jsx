import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wt4v5ebog.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wt4v5ebog"/>`,
		"fallback": "osmic:swimming-14",
	});
}

export default Component;
