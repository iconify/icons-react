import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqm9qnbgq.css';
import '../../css/u/u5ujo24lt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqm9qnbgq"/><path class="u5ujo24lt"/>`,
		"fallback": "garden:text-background-color-20",
	});
}

export default Component;
