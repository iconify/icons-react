import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/max9occ2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="max9occ2x"/>`,
		"fallback": "withicons:usb-solid",
	});
}

export default Component;
