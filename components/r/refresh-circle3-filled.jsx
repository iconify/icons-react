import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjv321_of.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yjv321_of"/>`,
		"fallback": "reicon:refresh-circle3-filled",
	});
}

export default Component;
