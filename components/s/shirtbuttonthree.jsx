import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rt-ujmo2s.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rt-ujmo2s"/>`,
		"fallback": "whh:shirtbuttonthree",
	});
}

export default Component;
