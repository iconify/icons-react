import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdmht6isv.css';
import '../../css/p/p7u7xr6jc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdmht6isv"/><path class="p7u7xr6jc"/>`,
		"fallback": "streamline-ultimate:phone-mobile-device-iphone-x-2-bold",
	});
}

export default Component;
