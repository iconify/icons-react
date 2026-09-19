import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oz6oarbgv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oz6oarbgv"/>`,
		"fallback": "bi:usb-c-fill",
	});
}

export default Component;
