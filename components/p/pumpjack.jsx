import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8a5w0b3y.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8a5w0b3y"/>`,
		"fallback": "pinhead:pumpjack",
	});
}

export default Component;
