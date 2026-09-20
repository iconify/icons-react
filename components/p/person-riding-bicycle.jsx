import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2-1b2hsn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2-1b2hsn"/>`,
		"fallback": "pinhead:person-riding-bicycle",
	});
}

export default Component;
