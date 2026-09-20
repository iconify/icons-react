import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbs3f-s9t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbs3f-s9t"/>`,
		"fallback": "streamline-pixel:interface-essential-dial-pad-1",
	});
}

export default Component;
