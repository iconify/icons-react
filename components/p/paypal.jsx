import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gezopnizk.css';
import '../../css/p/plqzk5bjr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gezopnizk"/><path class="plqzk5bjr"/>`,
		"fallback": "icomoon-free:paypal",
	});
}

export default Component;
