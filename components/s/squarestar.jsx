import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/snv5e5f9c.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="snv5e5f9c"/>`,
		"fallback": "whh:squarestar",
	});
}

export default Component;
