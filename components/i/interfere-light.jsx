import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igjwmybhz.css';

const viewBox = {"width":80,"height":60};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="igjwmybhz"/>`,
		"fallback": "thesvg-color:interfere-light",
	});
}

export default Component;
