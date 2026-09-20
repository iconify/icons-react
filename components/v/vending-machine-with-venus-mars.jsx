import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpwog2bdi.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dpwog2bdi"/>`,
		"fallback": "pinhead:vending-machine-with-venus-mars",
	});
}

export default Component;
