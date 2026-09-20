import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xygj0f-en.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xygj0f-en"/>`,
		"fallback": "pinhead:spoon",
	});
}

export default Component;
