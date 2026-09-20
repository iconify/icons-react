import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdj2-4vry.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdj2-4vry"/>`,
		"fallback": "pinhead:syrup-jug-with-droplet",
	});
}

export default Component;
