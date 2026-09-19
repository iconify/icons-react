import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wl_5u-arg.css';

const viewBox = {"width":485,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wl_5u-arg"/>`,
		"fallback": "file-icons:linqpad",
	});
}

export default Component;
