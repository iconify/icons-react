import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejhjl4iog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejhjl4iog"/>`,
		"fallback": "iconoir:sparks-solid",
	});
}

export default Component;
