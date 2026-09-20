import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpfqgx0tw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpfqgx0tw"/>`,
		"fallback": "pinhead:trophy-with-star",
	});
}

export default Component;
