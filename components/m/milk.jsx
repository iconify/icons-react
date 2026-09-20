import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsjoa2b6z.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fsjoa2b6z"/>`,
		"fallback": "picon:milk",
	});
}

export default Component;
