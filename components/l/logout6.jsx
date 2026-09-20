import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-195zbby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-195zbby"/>`,
		"fallback": "reicon:logout6",
	});
}

export default Component;
