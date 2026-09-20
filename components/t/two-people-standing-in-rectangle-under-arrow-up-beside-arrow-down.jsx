import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/on3r13bmh.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="on3r13bmh"/>`,
		"fallback": "pinhead:two-people-standing-in-rectangle-under-arrow-up-beside-arrow-down",
	});
}

export default Component;
