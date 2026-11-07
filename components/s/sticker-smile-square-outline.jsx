import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vu18-_bab.css';
import '../../css/l/lg9shfpyb.css';
import '../../css/p/pdpi2572z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vu18-_bab"/><path class="lg9shfpyb"/><path clip-rule="evenodd" class="pdpi2572z"/>`,
		"fallback": "solar:sticker-smile-square-outline",
	});
}

export default Component;
