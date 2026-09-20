import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azzl-tb9g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azzl-tb9g"/>`,
		"fallback": "streamline-pixel:interface-essential-alert-triangle-1",
	});
}

export default Component;
