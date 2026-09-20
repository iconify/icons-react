import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohyfmac4y.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohyfmac4y"/>`,
		"fallback": "pinhead:sixteenth-notes",
	});
}

export default Component;
