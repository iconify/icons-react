import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wg8_2jbxp.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wg8_2jbxp"/>`,
		"fallback": "pinhead:two-giraffes",
	});
}

export default Component;
