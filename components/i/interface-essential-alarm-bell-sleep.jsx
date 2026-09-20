import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvet70jfp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvet70jfp"/>`,
		"fallback": "streamline-pixel:interface-essential-alarm-bell-sleep",
	});
}

export default Component;
