import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ur6-9ubuj.css';
import '../../css/b/bcj78jz_c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ur6-9ubuj"/><path class="bcj78jz_c"/>`,
		"fallback": "streamline-pixel:interface-essential-switch-on",
	});
}

export default Component;
