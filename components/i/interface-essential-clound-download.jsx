import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y8924m47r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y8924m47r"/>`,
		"fallback": "streamline-pixel:interface-essential-clound-download",
	});
}

export default Component;
