import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zc5k0_b9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zc5k0_b9j"/>`,
		"fallback": "cbi:molotovtv",
	});
}

export default Component;
