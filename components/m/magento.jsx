import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilyi3y8_e.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilyi3y8_e"/>`,
		"fallback": "thesvg-color:magento",
	});
}

export default Component;
