import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mi0smr2nr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mi0smr2nr"/>`,
		"fallback": "streamline-pixel:interface-essential-safari-compass",
	});
}

export default Component;
