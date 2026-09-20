import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km-1_cczy.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="km-1_cczy"/>`,
		"fallback": "pinhead:shopping-bag-with-map-pin-with-dot",
	});
}

export default Component;
