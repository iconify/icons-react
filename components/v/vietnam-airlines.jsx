import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-6p3jmhi.css';

const viewBox = {"width":1515,"height":912};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-6p3jmhi"/>`,
		"fallback": "thesvg-color:vietnam-airlines",
	});
}

export default Component;
