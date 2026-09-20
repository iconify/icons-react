import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmr60dzfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmr60dzfw"/>`,
		"fallback": "streamline-ultimate:style-one-pin-star-bold",
	});
}

export default Component;
