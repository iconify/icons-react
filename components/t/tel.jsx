import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5qgjt1uh.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p5qgjt1uh"/>`,
		"fallback": "picon:tel",
	});
}

export default Component;
