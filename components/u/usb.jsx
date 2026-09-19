import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndv6oqbjh.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndv6oqbjh"/>`,
		"fallback": "si-glyph:usb",
	});
}

export default Component;
