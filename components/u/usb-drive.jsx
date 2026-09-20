import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm9ue06lw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vm9ue06lw"/>`,
		"fallback": "streamline:usb-drive",
	});
}

export default Component;
