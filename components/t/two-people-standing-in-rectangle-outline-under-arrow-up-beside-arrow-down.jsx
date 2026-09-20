import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-8at39gu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-8at39gu"/>`,
		"fallback": "pinhead:two-people-standing-in-rectangle-outline-under-arrow-up-beside-arrow-down",
	});
}

export default Component;
