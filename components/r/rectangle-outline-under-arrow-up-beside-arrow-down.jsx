import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tieppcbwn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tieppcbwn"/>`,
		"fallback": "pinhead:rectangle-outline-under-arrow-up-beside-arrow-down",
	});
}

export default Component;
