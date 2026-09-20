import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4mdfm72f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f4mdfm72f"/>`,
		"fallback": "ooui:italic-i",
	});
}

export default Component;
