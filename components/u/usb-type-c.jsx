import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3_4s2eta.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3_4s2eta"/>`,
		"fallback": "icon-park-outline:usb-type-c",
	});
}

export default Component;
