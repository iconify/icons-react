import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y67__ebdl.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y67__ebdl"/>`,
		"fallback": "picon:rollerblade",
	});
}

export default Component;
