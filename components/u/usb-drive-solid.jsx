import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djz7x8vob.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="djz7x8vob"/>`,
		"fallback": "streamline:usb-drive-solid",
	});
}

export default Component;
