import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzi8x3byu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzi8x3byu"/>`,
		"fallback": "streamline-sharp:user-single-neutral-female",
	});
}

export default Component;
