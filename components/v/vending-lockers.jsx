import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iy5uidbqx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iy5uidbqx"/>`,
		"fallback": "temaki:vending-lockers",
	});
}

export default Component;
