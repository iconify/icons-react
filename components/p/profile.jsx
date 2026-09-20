import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iuj7w-b9v.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iuj7w-b9v"/>`,
		"fallback": "picon:profile",
	});
}

export default Component;
