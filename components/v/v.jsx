import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpxc1-b7l.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fpxc1-b7l"/>`,
		"fallback": "pinhead:v",
	});
}

export default Component;
