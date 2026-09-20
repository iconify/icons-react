import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vl4nbbbal.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vl4nbbbal"/>`,
		"fallback": "pinhead:vending-machine-with-baguette",
	});
}

export default Component;
