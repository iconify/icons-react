import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqwg1-beo.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqwg1-beo"/>`,
		"fallback": "whh:shirtbutton",
	});
}

export default Component;
