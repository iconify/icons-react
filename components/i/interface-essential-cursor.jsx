import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgway08yl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgway08yl"/>`,
		"fallback": "streamline-pixel:interface-essential-cursor",
	});
}

export default Component;
