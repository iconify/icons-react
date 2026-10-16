import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qifb4r4in.css';
import '../../css/w/wtve9fz8c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qifb4r4in"/><path class="wtve9fz8c"/>`,
		"fallback": "energy-icons:usb-c-48",
	});
}

export default Component;
