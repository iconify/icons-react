import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm0ne0i8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hm0ne0i8j"/>`,
		"fallback": "coolicons:menu-double-small-duotone-round",
	});
}

export default Component;
