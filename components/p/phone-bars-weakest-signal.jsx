import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cw52gbqmr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cw52gbqmr"/>`,
		"fallback": "pinhead:phone-bars-weakest-signal",
	});
}

export default Component;
