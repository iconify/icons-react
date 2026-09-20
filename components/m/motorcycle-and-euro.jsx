import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/el96rjbky.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="el96rjbky"/>`,
		"fallback": "pinhead:motorcycle-and-euro",
	});
}

export default Component;
