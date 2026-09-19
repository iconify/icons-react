import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fnek59blr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fnek59blr"/>`,
		"fallback": "cryptocurrency:salt",
	});
}

export default Component;
