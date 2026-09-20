import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlv_0xbwg.css';

const viewBox = {"width":24,"height":24,"left":-4,"top":-1.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlv_0xbwg"/>`,
		"fallback": "jam:shield-close-f",
	});
}

export default Component;
